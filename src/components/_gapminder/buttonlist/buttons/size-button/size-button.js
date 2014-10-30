define([
    'jquery',
    'base/utils',
    'base/component',
    'base/model'
], function($, utils, Component, Model) {

    var picker,
        countries,
        button_id = 'circle',
        button_title = 'circle',
        button_text = 'Size';

    var SizeButton = Component.extend({
        init: function(parent, options) {
            this._super(parent, options);
            this.data = options.data;
            this.root = options.root;
        },

        postRender: function() {
            var parent = $(this.root);

            var button = $('<button>').attr({
                title: button_title,
                class: 'vzb-buttonlist-btn vzb-buttonlist-btn-' + button_id
            });

            var icon = $('<span>').attr({
                class: 'vzb-btn-icon'
            });

            icon.appendTo(button)

            var i = $('<i>').attr({
                class: 'fa fa-' + button_id
            });

            i.appendTo(icon);


            var title = $('<span>').attr({
                class: 'vzb-btn-title',
            });

            title.html(button_text);
            title.appendTo(button);

            parent.append(button);
        },


        resize: function() {

        },


        update: function() {

        }

    });

    return SizeButton;
});
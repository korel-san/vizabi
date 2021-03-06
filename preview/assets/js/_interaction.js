function play() {
  var options = {
    state: {
      time: {
        playing: true
      }
    }
  };
  VIZ.setOptions(options);
}

function pause() {
  var options = {
    state: {
      time: {
        playing: false
      }
    }
  };
  VIZ.setOptions(options);
}

function language(lang) {
  var options = {
    language: {
      id: lang
    }
  };
  VIZ.setOptions(options);
}

function recstart() {
  var options = {
    state: {
      time: {
        record: true
      }
    }
  };
  VIZ.setOptions(options);
}

function recstop() {
  var options = {
    state: {
      time: {
        record: false
      }
    }
  };
  VIZ.setOptions(options);
}

document.getElementById("vzbp-btn-play").onclick = play;
document.getElementById("vzbp-btn-lang").onclick = function() {
  language('se')
};
document.getElementById("vzbp-btn-record").onclick = recstart;
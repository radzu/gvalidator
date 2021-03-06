ONEGEEK.forms.GValidator.options = {
    // Constants: Edit to suit your environment
    compactMessages: true,

    // Image constants
    icons: {
      ok:     '../images/icons/tick.png',
      info:   '../images/icons/help.png',
      error:  '../images/icons/icon_alert.gif'
    }
};

ONEGEEK.forms.GValidator.plugins = {
    ip4address: {
        _extends:     'GenericTextField',
        regex:        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g,
        cleanRegex:   /[^0-9\.]/g,
        contextMsg: 'Please enter a valid IP 4 Address i.e. 127.0.0.1',
        errorMsg: 'Please enter a valid IP 4 Address i.e. 127.0.0.1',   
        successMsg: 'Thanks',
        validate: function() {
              if(!this._validate()) {
                this.highlight();
              } else {
                this.unHighlight();
              }
        },
        highlight: function() {
          this.field.style.background = 'rgb(200,0,0)';
        },
        unHighlight: function() {
          this.field.style.background = 'rgb(255,255,255)';
        }        
    }    
};
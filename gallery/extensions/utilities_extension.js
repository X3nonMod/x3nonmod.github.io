(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.joinThree = function(s1, s2, s3) {
        return s1 + s2 + s3;
    };

    ext.true = function() {
        return true;
    };

    ext.false = function() {
        return false;
    };

    ext.rndLetter = function() {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letters.charAt(Math.floor(Math.random() * letters.length));
    };

    ext.toLowercase = function(s1) {
        return s1.toLowerCase();
    };
    ext.toUppercase = function(s1) {
        return s1.toUpperCase();
    };

    ext.rndString = function(chance, s1, s2) {
        return Math.random() > chance / 100 ? s2 : s1;
    };

    ext.contains = function(s1, s2) {
        const format = function (string) {
            return string.toString().toLowerCase();
        };
        return format(s1).includes(format(s2));
    };

    ext.packaged = function() {
        return Scratch.vm.runtime.isPackaged;
    }

    ext.currentMillisecond = function() {
        return Date.now() % 1000;
    }

    ext.electraMod = function() {
        return Scratch.extensions.isElectraMod;
    }

    ext.setDimensions = function(width, height) {
      width = Scratch.Cast.toNumber(width);
      height = Scratch.Cast.toNumber(height);
      Scratch.vm.setStageSize(width, height);
    }

ext.getDimension = function(dimension) {
    if (dimension === "width") {
        return Scratch.vm.runtime.stageWidth;
    } else if (dimension === "height") {
        return Scratch.vm.runtime.stageHeight;
    }
}

ext.ifElse = function(b1, s1, s2) {
    return b1 ? s1 : s2;
}

    var descriptor = {
        blocks: [
            ['r', 'join %s %s %s', 'joinThree', 'Hello', 'world', '!'],
            ['b', 'true', 'true'],
            ['b', 'false', 'false'],
            ['r', 'random letter', 'rndLetter'],
            ['r', 'random string %n %s %s', 'rndString', 50, 'String 1', 'String 2'],
            ['b', '%s contains %s?', 'contains', 'apple', 'a'],
            ['r', 'current millisecond', 'currentMillisecond'],
            ['r', '%s lowercase', 'toLowercase', 'HeLlO wOrLd!'],
            ['r', '%s uppercase', 'toUppercase', 'HeLlO wOrLd!'],
            ['r', 'if %b %s else %s', 'ifElse', '', 'apple', 'banana'],

            ['b', '{EM} is ElectraMod?', 'electraMod'],
            ['b', '{EM} project packaged?', 'packaged'],
            ['', '{EM} set stage width: %n height: %n', 'setDimensions', '480', '360'],
            ['r', '{EM} stage %s', 'getDimension'],



                ],
        menus: {
        }
    };

    ScratchExtensions.register('Utilities', descriptor, ext);
})({});

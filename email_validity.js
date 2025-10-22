// Problem 02 : Notification Generator
// ass-4 prob-2:  
// 
//                                                                                                                      function validEmail(email) {
function validEmail(email) {

    if (typeof email !== 'string') {
        return "Invalid";
    }
    else {

        let lastFourCharacters = '';
        for (let i = 4; i >= 1; i--) {
            lastFourCharacters += email[email.length - i];
        }


        let characterFirst = email.charCodeAt(0);
        if ((characterFirst >= 33 && characterFirst <= 47) ||
            (characterFirst >= 58 && characterFirst <= 64) ||
            (characterFirst >= 91 && characterFirst <= 96) ||
            (characterFirst >= 123 && characterFirst <= 126)
        ) {
            return false;
        }

        else if (!(email.includes('@'))) {
            return false;
        }
        else if (email.includes(' ')) {
            return false;
        }
        else if ((lastFourCharacters !== '.com')) {
            return false;
        }
        else {
            return true;
        }

    }

}



var na = validEmail('yeasir@gmail.com')
console.log(na)
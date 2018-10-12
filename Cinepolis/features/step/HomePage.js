export class HomePage {
    constructor (city) {
        this.city = city;
    }

    //Methods
  
    //Go Home Page
    goUrl (url) {
      browser.url(url);
    } 
  
    //Search by City
    searchByCity (city, selector) {
        browser.selectByVisibleText(selector,city);
    }

    //Apply Range
    applyRange (fromHour, toHour) {
        //Drag & Drop element 

        let from = toDate(fromHour, "h:m");
        let fromTime = from.getHours();
        let to = toDate(toHour,"h:m");
        let toTime = to.getHours();

        moveSilder(fromTime, "#slider-range > a:nth-child(2)");
        moveSilder(toTime, "#slider-range > a:nth-child(3)");

        function moveSilder (time, selector) {

            var pipe = 0;
            console.log(time);
            switch (true) {
                case time == 0:
                    pipe = 0;
                    break;
                case time == 10:
                    pipe = 1;
                    break;
                case time == 11:
                    pipe = 2;
                    break;
                case time == 12:
                    pipe = 3;
                    break;  
                case time == 13:
                    pipe = 4;
                    break;
                case time == 14:
                    pipe = 5;
                    break;
                case time == 15:
                    pipe = 6;
                    break;
                case time == 16:
                    pipe = 7;
                    break; 
                case time == 17:
                    pipe = 8;
                    break;
                case time == 18:
                    pipe = 9;
                    break;
                case time == 19:
                    pipe = 10;
                    break;
                case time == 20:
                    pipe = 11;
                    break;  
                case time == 21:
                    pipe = 12;
                    break;
                case time == 22:
                    pipe = 13;
                    break;
                case time == 23:
                    pipe = 14;
                    break;
                default: 
                    pipe = 2;
            }
            browser.dragAndDrop(selector,`#slider-range > span.ui-slider-pip.ui-slider-pip-${pipe}`);

        }

        function toDate(dStr,format) {
            var now = new Date();
            if (format == "h:m") {
                now.setHours(dStr.substr(0,dStr.indexOf(":")));
                now.setMinutes(dStr.substr(dStr.indexOf(":")+1));
                now.setSeconds(0);
                return now;
            }else
                return "Invalid Format";
        }
    } 

    //Check if Range applied
    checkHour (selector,fromTime, toTime) {
        let aTimes = [];
        browser.getText(selector).forEach(element => {
            if (element !== "") { 
                aTimes.push(element);
            }
        });
    }

    //Click
    clickElement (selector) {
        browser.click(selector);
      }
  
  
  }
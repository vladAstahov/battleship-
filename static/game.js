var socket = io();
socket.on('message', function(data) {
    if(socket.id != data.id){
        if (gamestage.ready != true || gamestage.enemyready != true){
            for (var key in clickbtn.enemybtn) {
                clickbtn.enemybtn[key] = data.serverbtns[key]
            }
        }
        if (gamestage.ready == true && gamestage.enemyready == true){
            for (var key in clickbtn.btns) {
                clickbtn.btns[key] = data.serverenemybtn[key]
            }
        }
    }  
});

socket.on('isreadyserv', function(data){
    if (socket.id != data.id){
        gamestage.enemyready = data.ready
    }
})

socket.on('log', function(data){
    console.log(data)
})

var isreadyall = false
var select = document.querySelector('select');
var countof4 = 0;
var countof3 = 0;
var countof2 = 0;
var countof1 = 0;

var row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var row2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var row3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
var row4 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
var row5 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
var row6 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
var row7 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70]
var row8 = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80]
var row9 = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
var row10 = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

var col1 = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91]
var col2 = [2, 12, 22, 32, 42, 52, 62, 72, 82, 92]
var col3 = [3, 13, 23, 33, 43, 53, 63, 73, 83, 93]
var col4 = [4, 14, 24, 34, 44, 54, 64, 74, 84, 94]
var col5 = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]
var col6 = [6, 16, 26, 36, 46, 56, 66, 76, 86, 96]
var col7 = [7, 17, 27, 37, 47, 57, 67, 77, 87, 97]
var col8 = [8, 18, 28, 38, 48, 58, 68, 78, 88, 98]
var col9 = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]
var col10 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

var clickbtn = {
    id: socket.id,
    stage: 0, //* стадия игры
    btns: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0,
        11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0,
        21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 29: 0, 30: 0,
        31: 0, 32: 0, 33: 0, 34: 0, 35: 0, 36: 0, 37: 0, 38: 0, 39: 0, 40: 0,
        41: 0, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0, 47: 0, 48: 0, 49: 0, 50: 0,
        51: 0, 52: 0, 53: 0, 54: 0, 55: 0, 56: 0, 57: 0, 58: 0, 59: 0, 60: 0,
        61: 0, 62: 0, 63: 0, 64: 0, 65: 0, 66: 0, 67: 0, 68: 0, 69: 0, 70: 0,
        71: 0, 72: 0, 73: 0, 74: 0, 75: 0, 76: 0, 77: 0, 78: 0, 79: 0, 80: 0,
        81: 0, 82: 0, 83: 0, 84: 0, 85: 0, 86: 0, 87: 0, 88: 0, 89: 0, 90: 0,
        91: 0, 92: 0, 93: 0, 94: 0, 95: 0, 96: 0, 97: 0, 98: 0, 99: 0, 100: 0
    },
    enemybtn: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0,
        11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0,
        21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 29: 0, 30: 0,
        31: 0, 32: 0, 33: 0, 34: 0, 35: 0, 36: 0, 37: 0, 38: 0, 39: 0, 40: 0,
        41: 0, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0, 47: 0, 48: 0, 49: 0, 50: 0,
        51: 0, 52: 0, 53: 0, 54: 0, 55: 0, 56: 0, 57: 0, 58: 0, 59: 0, 60: 0,
        61: 0, 62: 0, 63: 0, 64: 0, 65: 0, 66: 0, 67: 0, 68: 0, 69: 0, 70: 0,
        71: 0, 72: 0, 73: 0, 74: 0, 75: 0, 76: 0, 77: 0, 78: 0, 79: 0, 80: 0,
        81: 0, 82: 0, 83: 0, 84: 0, 85: 0, 86: 0, 87: 0, 88: 0, 89: 0, 90: 0,
        91: 0, 92: 0, 93: 0, 94: 0, 95: 0, 96: 0, 97: 0, 98: 0, 99: 0, 100: 0
    }
}

var gamestage = {
    ready: false,
    enemyready: false
}

select.onchange = function(){
    var indexSelected = select.selectedIndex,
    option = select.querySelectorAll('option')[indexSelected];
      
    var selectedId = option.getAttribute('id');
  
    if( selectedId == '1' ) clickbtn.stage = 4;
    if( selectedId == '2' ) clickbtn.stage = 3;
    if( selectedId == '3' ) clickbtn.stage = 2;
    if( selectedId == '4' ) clickbtn.stage = 1;
};

function iszerorow(btn, val){
    var notzero = 0
    if (val == 4){
        for (var key in clickbtn.btns){
            if ((btn + 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 2) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 3) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 4) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 8) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 7) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 6) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 12) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 13) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 14) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            }
        }
        if (notzero == 0){
            return true
        }
    } else if (val == 3){
        for (var key in clickbtn.btns){
            if ((btn + 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 2) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 3) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 8) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 7) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 12) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 13) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            }
        }
        if (notzero == 0){
            return true
        }
    } else if (val == 2){
        for (var key in clickbtn.btns){
            if ((btn + 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 2) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 8) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 12) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            }
        }
        if (notzero == 0){
            return true
        }
    } else if (val == 1){
        for (var key in clickbtn.btns){
            if ((btn + 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            }
        }
        if (notzero == 0){
            return true
        }
    }
    
}

function iszerocol(btn, val){
    var notzero = 0
    if (val == 4){
        for (var key in clickbtn.btns){
            if ((btn + 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 20) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 30) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 40) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 21) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 31) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 41) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 19) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 29) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 39) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            }
        }
        if (notzero == 0){
            return true
        }
    } else if (val == 3){
        for (var key in clickbtn.btns){
            if ((btn + 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 20) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 30) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 21) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 31) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 19) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 29) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            }
        }
        if (notzero == 0){
            return true
        }
    } else if (val == 2){
        for (var key in clickbtn.btns){
            if ((btn + 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 20) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 10) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 21) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 11) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 9) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn + 19) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            } else if ((btn - 1) == key){
                if (clickbtn.btns[key] != 0){
                    notzero++
                }
            }
        }
        if (notzero == 0){
            return true
        }
    }
    
}

function inrow(btn, val){
    if (val == 4){
        if (row1.indexOf(btn) != -1 && row1.indexOf(btn + 1) != -1 && row1.indexOf(btn + 2) != -1 && row1.indexOf(btn + 3) != -1){
            return true
        } else if (row2.indexOf(btn) != -1 && row2.indexOf(btn + 1) != -1 && row2.indexOf(btn + 2) != -1 && row2.indexOf(btn + 3) != -1){
            return true
        } else if (row3.indexOf(btn) != -1 && row3.indexOf(btn + 1) != -1 && row3.indexOf(btn + 2) != -1 && row3.indexOf(btn + 3) != -1){
            return true
        } else if (row4.indexOf(btn) != -1 && row4.indexOf(btn + 1) != -1 && row4.indexOf(btn + 2) != -1 && row4.indexOf(btn + 3) != -1){
            return true
        } else if (row5.indexOf(btn) != -1 && row5.indexOf(btn + 1) != -1 && row5.indexOf(btn + 2) != -1 && row5.indexOf(btn + 3) != -1){
            return true
        } else if (row6.indexOf(btn) != -1 && row6.indexOf(btn + 1) != -1 && row6.indexOf(btn + 2) != -1 && row6.indexOf(btn + 3) != -1){
            return true
        } else if (row7.indexOf(btn) != -1 && row7.indexOf(btn + 1) != -1 && row7.indexOf(btn + 2) != -1 && row7.indexOf(btn + 3) != -1){
            return true
        } else if (row8.indexOf(btn) != -1 && row8.indexOf(btn + 1) != -1 && row8.indexOf(btn + 2) != -1 && row8.indexOf(btn + 3) != -1){
            return true
        } else if (row9.indexOf(btn) != -1 && row9.indexOf(btn + 1) != -1 && row9.indexOf(btn + 2) != -1 && row9.indexOf(btn + 3) != -1){
            return true
        } else if (row10.indexOf(btn) != -1 && row10.indexOf(btn + 1) != -1 && row10.indexOf(btn + 2) != -1 && row10.indexOf(btn + 3) != -1){
            return true
        }
    } else if (val == 3){
        if (row1.indexOf(btn) != -1 && row1.indexOf(btn + 1) != -1 && row1.indexOf(btn + 2) != -1){
            return true
        } else if (row2.indexOf(btn) != -1 && row2.indexOf(btn + 1) != -1 && row2.indexOf(btn + 2) != -1){
            return true
        } else if (row3.indexOf(btn) != -1 && row3.indexOf(btn + 1) != -1 && row3.indexOf(btn + 2) != -1){
            return true
        } else if (row4.indexOf(btn) != -1 && row4.indexOf(btn + 1) != -1 && row4.indexOf(btn + 2) != -1){
            return true
        } else if (row5.indexOf(btn) != -1 && row5.indexOf(btn + 1) != -1 && row5.indexOf(btn + 2) != -1){
            return true
        } else if (row6.indexOf(btn) != -1 && row6.indexOf(btn + 1) != -1 && row6.indexOf(btn + 2) != -1){
            return true
        } else if (row7.indexOf(btn) != -1 && row7.indexOf(btn + 1) != -1 && row7.indexOf(btn + 2) != -1){
            return true
        } else if (row8.indexOf(btn) != -1 && row8.indexOf(btn + 1) != -1 && row8.indexOf(btn + 2) != -1){
            return true
        } else if (row9.indexOf(btn) != -1 && row9.indexOf(btn + 1) != -1 && row9.indexOf(btn + 2) != -1){
            return true
        } else if (row10.indexOf(btn) != -1 && row10.indexOf(btn + 1) != -1 && row10.indexOf(btn + 2) != -1){
            return true
        }
    } else if (val == 2){
        if (row1.indexOf(btn) != -1 && row1.indexOf(btn + 1) != -1){
            return true
        } else if (row2.indexOf(btn) != -1 && row2.indexOf(btn + 1) != -1){
            return true
        } else if (row3.indexOf(btn) != -1 && row3.indexOf(btn + 1) != -1){
            return true
        } else if (row4.indexOf(btn) != -1 && row4.indexOf(btn + 1) != -1){
            return true
        } else if (row5.indexOf(btn) != -1 && row5.indexOf(btn + 1) != -1){
            return true
        } else if (row6.indexOf(btn) != -1 && row6.indexOf(btn + 1) != -1){
            return true
        } else if (row7.indexOf(btn) != -1 && row7.indexOf(btn + 1) != -1){
            return true
        } else if (row8.indexOf(btn) != -1 && row8.indexOf(btn + 1) != -1){
            return true
        } else if (row9.indexOf(btn) != -1 && row9.indexOf(btn + 1) != -1){
            return true
        } else if (row10.indexOf(btn) != -1 && row10.indexOf(btn + 1) != -1){
            return true
        }
    }
}

function incol(btn, val){
    if (val == 4){
        if (col1.indexOf(btn) != -1 && col1.indexOf(btn + 10) != -1 && col1.indexOf(btn + 20) != -1 && col1.indexOf(btn + 30) != -1){
            return true
        } else if (col2.indexOf(btn) != -1 && col2.indexOf(btn + 10) != -1 && col2.indexOf(btn + 20) != -1 && col2.indexOf(btn + 30) != -1){
            return true
        } else if (col3.indexOf(btn) != -1 && col3.indexOf(btn + 10) != -1 && col3.indexOf(btn + 20) != -1 && col3.indexOf(btn + 30) != -1){
            return true
        } else if (col4.indexOf(btn) != -1 && col4.indexOf(btn + 10) != -1 && col4.indexOf(btn + 20) != -1 && col4.indexOf(btn + 30) != -1){
            return true
        } else if (col5.indexOf(btn) != -1 && col5.indexOf(btn + 10) != -1 && col5.indexOf(btn + 20) != -1 && col5.indexOf(btn + 30) != -1){
            return true
        } else if (col6.indexOf(btn) != -1 && col6.indexOf(btn + 10) != -1 && col6.indexOf(btn + 20) != -1 && col6.indexOf(btn + 30) != -1){
            return true
        } else if (col7.indexOf(btn) != -1 && col7.indexOf(btn + 10) != -1 && col7.indexOf(btn + 20) != -1 && col7.indexOf(btn + 30) != -1){
            return true
        } else if (col8.indexOf(btn) != -1 && col8.indexOf(btn + 10) != -1 && col8.indexOf(btn + 20) != -1 && col8.indexOf(btn + 30) != -1){
            return true
        } else if (col9.indexOf(btn) != -1 && col9.indexOf(btn + 10) != -1 && col9.indexOf(btn + 20) != -1 && col9.indexOf(btn + 30) != -1){
            return true
        } else if (col10.indexOf(btn) != -1 && col10.indexOf(btn + 10) != -1 && col10.indexOf(btn + 20) != -1 && col10.indexOf(btn + 30) != -1){
            return true
        }
    } else if (val == 3){
        if (col1.indexOf(btn) != -1 && col1.indexOf(btn + 10) != -1 && col1.indexOf(btn + 20) != -1){
            return true
        } else if (col2.indexOf(btn) != -1 && col2.indexOf(btn + 10) != -1 && col2.indexOf(btn + 20) != -1){
            return true
        } else if (col3.indexOf(btn) != -1 && col3.indexOf(btn + 10) != -1 && col3.indexOf(btn + 20) != -1){
            return true
        } else if (col4.indexOf(btn) != -1 && col4.indexOf(btn + 10) != -1 && col4.indexOf(btn + 20) != -1){
            return true
        } else if (col5.indexOf(btn) != -1 && col5.indexOf(btn + 10) != -1 && col5.indexOf(btn + 20) != -1){
            return true
        } else if (col6.indexOf(btn) != -1 && col6.indexOf(btn + 10) != -1 && col6.indexOf(btn + 20) != -1){
            return true
        } else if (col7.indexOf(btn) != -1 && col7.indexOf(btn + 10) != -1 && col7.indexOf(btn + 20) != -1){
            return true
        } else if (col8.indexOf(btn) != -1 && col8.indexOf(btn + 10) != -1 && col8.indexOf(btn + 20) != -1){
            return true
        } else if (col9.indexOf(btn) != -1 && col9.indexOf(btn + 10) != -1 && col9.indexOf(btn + 20) != -1){
            return true
        } else if (col10.indexOf(btn) != -1 && col10.indexOf(btn + 10) != -1 && col10.indexOf(btn + 20) != -1){
            return true
        }
    } else if (val == 2){
        if (col1.indexOf(btn) != -1 && col1.indexOf(btn + 10) != -1){
            return true
        } else if (col2.indexOf(btn) != -1 && col2.indexOf(btn + 10) != -1){
            return true
        } else if (col3.indexOf(btn) != -1 && col3.indexOf(btn + 10) != -1){
            return true
        } else if (col4.indexOf(btn) != -1 && col4.indexOf(btn + 10) != -1){
            return true
        } else if (col5.indexOf(btn) != -1 && col5.indexOf(btn + 10) != -1){
            return true
        } else if (col6.indexOf(btn) != -1 && col6.indexOf(btn + 10) != -1){
            return true
        } else if (col7.indexOf(btn) != -1 && col7.indexOf(btn + 10) != -1){
            return true
        } else if (col8.indexOf(btn) != -1 && col8.indexOf(btn + 10) != -1){
            return true
        } else if (col9.indexOf(btn) != -1 && col9.indexOf(btn + 10) != -1){
            return true
        } else if (col10.indexOf(btn) != -1 && col10.indexOf(btn + 10) != -1){
            return true
        }
    }
}

function clearingbtn(val){
    for (var key in clickbtn.btns){
        if (clickbtn.btns[key] == val){
            clickbtn.btns[key] = 0
        }
    }
}

function revalue(stage){
    if (stage == 3){
        for (var key in clickbtn.btns){
            if (clickbtn.btns[key] == 3.2){
                clickbtn.btns[key] = 3.1
            }
        }
    }
    if (stage == 2){
        for (var key in clickbtn.btns){
            if (clickbtn.btns[key] == 2.2){
                clickbtn.btns[key] = 2.1
            }
            if (clickbtn.btns[key] == 2.3){
                clickbtn.btns[key] = 2.2
            }
        }
    }
    if (stage == 1){
        for (var key in clickbtn.btns){
            if (clickbtn.btns[key] == 1.2){
                clickbtn.btns[key] = 1.1
            }
            if (clickbtn.btns[key] == 1.3){
                clickbtn.btns[key] = 1.2
            }
            if (clickbtn.btns[key] == 1.4){
                clickbtn.btns[key] = 1.3
            }
        }
    }  
}

function clickbtnfn(btnid) {
    if (clickbtn.stage == 4){
        if (clickbtn.btns[btnid] == 0){
            if(iszerorow(btnid, 4) == true && inrow(btnid, 4) == true){
                clearingbtn(4)

                clickbtn.btns[btnid] = 4
                clickbtn.btns[btnid + 1] = 4
                clickbtn.btns[btnid + 2] = 4
                clickbtn.btns[btnid + 3] = 4

            }
        } else if (clickbtn.btns[btnid] == 4){
            if(iszerorow(btnid, 4) == true && inrow(btnid, 4) == true){
                clearingbtn(4)

                clickbtn.btns[btnid] = 4
                clickbtn.btns[btnid + 1] = 4
                clickbtn.btns[btnid + 2] = 4
                clickbtn.btns[btnid + 3] = 4

            } else if (iszerocol(btnid, 4) == true && incol(btnid, 4) == true){                   
                clearingbtn(4)

                clickbtn.btns[btnid] = 4
                clickbtn.btns[btnid + 10] = 4
                clickbtn.btns[btnid + 20] = 4
                clickbtn.btns[btnid + 30] = 4
            }
        }
    } else if (clickbtn.stage == 3){
            if (clickbtn.btns[btnid] == 0){
                if (countof3 == 0){
                    if(iszerorow(btnid, 3) && inrow(btnid, 3)){
    
                        clickbtn.btns[btnid] = 3.1
                        clickbtn.btns[btnid + 1] = 3.1
                        clickbtn.btns[btnid + 2] = 3.1

                        countof3++
                    }
                }else if (countof3 == 1){
                    if(iszerorow(btnid, 3) && inrow(btnid, 3)){
    
                        clickbtn.btns[btnid] = 3.2
                        clickbtn.btns[btnid + 1] = 3.2
                        clickbtn.btns[btnid + 2] = 3.2

                        countof3++
                    }
                } else if (countof3 == 2){
                    if (iszerorow(btnid, 3) && inrow(btnid, 3)){
                        
                        clearingbtn(3.1)

                        revalue(3)

                        clickbtn.btns[btnid] = 3.2
                        clickbtn.btns[btnid + 1] = 3.2
                        clickbtn.btns[btnid + 2] = 3.2
                    }
                }
            } else if (clickbtn.btns[btnid] == 3.1){
                if(iszerorow(btnid, 3) && inrow(btnid, 3)){

                    clearingbtn(3.1)

                    clickbtn.btns[btnid] = 3.1
                    clickbtn.btns[btnid + 1] = 3.1
                    clickbtn.btns[btnid + 2] = 3.1

                } else if (iszerocol(btnid, 3) && incol(btnid, 3)){
                    
                    clearingbtn(3.1)

                    clickbtn.btns[btnid] = 3.1
                    clickbtn.btns[btnid + 10] = 3.1
                    clickbtn.btns[btnid + 20] = 3.1
                }
            } else if (clickbtn.btns[btnid] == 3.2){
                if(iszerorow(btnid, 3) && inrow(btnid, 3)){

                    clearingbtn(3.2)

                    clickbtn.btns[btnid] = 3.2
                    clickbtn.btns[btnid + 1] = 3.2
                    clickbtn.btns[btnid + 2] = 3.2

                } else if (iszerocol(btnid, 3) && incol(btnid, 3)){
                    
                    clearingbtn(3.2)

                    clickbtn.btns[btnid] = 3.2
                    clickbtn.btns[btnid + 10] = 3.2
                    clickbtn.btns[btnid + 20] = 3.2
                }
            }
    } else if (clickbtn.stage == 2){
        if (clickbtn.btns[btnid] == 0){
            if (countof2 == 0){
                if(iszerorow(btnid, 2) && inrow(btnid, 2)){

                    clickbtn.btns[btnid] = 2.1
                    clickbtn.btns[btnid + 1] = 2.1

                    countof2++
                }
            }else if (countof2 == 1){
                if(iszerorow(btnid, 2) && inrow(btnid, 2)){

                    clickbtn.btns[btnid] = 2.2
                    clickbtn.btns[btnid + 1] = 2.2

                    countof2++
                }
            }else if (countof2 == 2){
                if(iszerorow(btnid, 2) && inrow(btnid, 2)){

                    clickbtn.btns[btnid] = 2.3
                    clickbtn.btns[btnid + 1] = 2.3

                    countof2++
                }
            } else if (countof2 == 3){
                if (iszerorow(btnid, 2) && inrow(btnid, 2)){
                    
                    clearingbtn(2.1)

                    revalue(2)

                    clickbtn.btns[btnid] = 2.3
                    clickbtn.btns[btnid + 1] = 2.3
                }
            }
        } else if (clickbtn.btns[btnid] == 2.1){
            if(iszerorow(btnid, 2) && inrow(btnid, 2)){

                clearingbtn(2.1)

                clickbtn.btns[btnid] = 2.1
                clickbtn.btns[btnid + 1] = 2.1

            } else if (iszerocol(btnid, 2) && incol(btnid, 2)){
                
                clearingbtn(2.1)

                clickbtn.btns[btnid] = 2.1
                clickbtn.btns[btnid + 10] = 2.1
            }
        } else if (clickbtn.btns[btnid] == 2.2){
            if(iszerorow(btnid, 2) && inrow(btnid, 2)){

                clearingbtn(2.2)

                clickbtn.btns[btnid] = 2.2
                clickbtn.btns[btnid + 1] = 2.2

            } else if (iszerocol(btnid, 2) && incol(btnid, 2)){
                
                clearingbtn(2.2)

                clickbtn.btns[btnid] = 2.2
                clickbtn.btns[btnid + 10] = 2.2
            }
        } else if (clickbtn.btns[btnid] == 2.3){
            if(iszerorow(btnid, 2) && inrow(btnid, 2)){

                clearingbtn(2.3)

                clickbtn.btns[btnid] = 2.3
                clickbtn.btns[btnid + 1] = 2.3

            } else if (iszerocol(btnid, 2) && incol (btnid, 2)){
                
                clearingbtn(2.3)

                clickbtn.btns[btnid] = 2.3
                clickbtn.btns[btnid + 10] = 2.3
            }
        }
    } else if (clickbtn.stage == 1){
        if (clickbtn.btns[btnid] == 0){
            if (countof1 == 0){
                if(iszerorow(btnid, 1)){

                    clickbtn.btns[btnid] = 1.1

                    countof1++
                }
            } else if (countof1 == 1){
                if(iszerorow(btnid, 1)){

                    clickbtn.btns[btnid] = 1.2

                    countof1++
                }
            } else if (countof1 == 2){
                if(iszerorow(btnid, 1)){

                    clickbtn.btns[btnid] = 1.3

                    countof1++
                }
            } else if (countof1 == 3){
                if(iszerorow(btnid, 1)){

                    clickbtn.btns[btnid] = 1.4

                    countof1++
                }
            } else if (countof1 == 4){
                if (iszerorow(btnid, 1)){
                    
                    clearingbtn(1.1)

                    revalue(1)

                    clickbtn.btns[btnid] = 1.4
                }
            }
        }
    }
}

function attack(btnid) {//* val == 5 это попадание а val == 6 это мис
    var key;
    if (btnid.length == 2){
        key = Number.parseInt(btnid[0])
    } else if (btnid.length == 3){
        key = Number.parseInt(btnid[0] + btnid[1])
    } else if (btnid.length == 4){
        key = Number.parseInt(btnid[0] + btnid[1] + btnid[2])
    }
    
    if (gamestage.ready == true && gamestage.enemyready == true){
        if (clickbtn.enemybtn[key] != 0){
            clickbtn.enemybtn[key] = 5
        }
        if (clickbtn.enemybtn[key] == 0){
            clickbtn.enemybtn[key] = 6
        }
    } 
}

function isready(){
    var counter = 0
    for (var key in clickbtn.btns){
        if (clickbtn.btns[key] != 0){
            counter++
        }
    }
    if (counter == 20){
        gamestage.ready = true
        socket.emit('readyforgame', gamestage)
    } else {
        alert('Выставте все корабли')
    }
}
socket.on('state', function(players) {
    for (var id in players) {
        var player = players[id];
        if (player.id == socket.id){
            for (var key in player.serverbtns){
                if (player.serverbtns[key] == 0){
                    document.getElementById(String(key)).classList.add("water")
                } else if (player.serverbtns[key] == 4){
                    document.getElementById(String(key)).classList.remove("water")
                    document.getElementById(String(key)).classList.add("ships4")
                } else if (player.serverbtns[key] == 3.1 || player.serverbtns[key] == 3.2){
                    document.getElementById(String(key)).classList.remove("water")
                    document.getElementById(String(key)).classList.add("ships3")
                } else if (player.serverbtns[key] == 2.1 || player.serverbtns[key] == 2.2 || player.serverbtns[key] == 2.3){
                    document.getElementById(String(key)).classList.remove("water")
                    document.getElementById(String(key)).classList.add("ships2")
                } else if (player.serverbtns[key] == 1.1 || player.serverbtns[key] == 1.2 || player.serverbtns[key] == 1.3 || player.serverbtns[key] == 1.4){
                    document.getElementById(String(key)).classList.remove("water")
                    document.getElementById(String(key)).classList.add("ships1")
                } else if (player.serverbtns[key] == 5){
                    document.getElementById(String(key)).classList.remove("water")
                    document.getElementById(String(key)).classList.add("atacked")
                } else if (player.serverbtns[key] == 6){
                    document.getElementById(String(key)).classList.remove("water")
                    document.getElementById(String(key)).classList.add("miss")
                }
            }
            for (var key in player.serverenemybtn){
                if (player.serverenemybtn[key] == 0){
                    document.getElementById(String(key) + 'e').classList.add("water")
                } else if (player.serverenemybtn[key] == 5){
                    document.getElementById(String(key) + 'e').classList.remove("water")
                    document.getElementById(String(key) + 'e').classList.add("atacked")
                } else if (player.serverenemybtn[key] == 6){
                    document.getElementById(String(key) + 'e').classList.remove("water")
                    document.getElementById(String(key) + 'e').classList.add("miss")
                }
            }
        }
    }
});

socket.emit('new player')
setInterval(function(){
    socket.emit('clickbtn', clickbtn);
}, 1000 / 60)
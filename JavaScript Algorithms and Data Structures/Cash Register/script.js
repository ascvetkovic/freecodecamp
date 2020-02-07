/* Declaring variables */
var pen = 0;
var nic = 0;
var dim = 0;
var qua = 0;
var hal = 0;
var one = 0;
var fiv = 0;
var ten = 0;
var twe = 0;
var fif = 0;
var hun = 0;
var cas = 0;
var pri = 0;

var closed = false;
var thechange = [];

var apen = ["PENNY", 0];
var anic = ["NICKEL", 0];
var adim = ["DIME", 0];
var aqua = ["QUARTER", 0];
var ahal = ["HALF-DOLLAR", 0];
var aone = ["ONE", 0];
var afiv = ["FIVE", 0];
var aten = ["TEN", 0];
var atwe = ["TWENTY", 0];
var afif = ["FIFTY", 0];
var ahun = ["HUNDRED", 0];
var cid = [];

/* Function to reset the variable values */
function reset() {
  pen = 0;
  nic = 0;
  dim = 0;
  qua = 0;
  one = 0;
  fiv = 0;
  ten = 0;
  twe = 0;
  fif = 0;
  hun = 0;
  cas = 0;
  pri = 0;

  closed = false;
  thechange = [];

  apen = ["PENNY", 0];
  anic = ["NICKEL", 0];
  adim = ["DIME", 0];
  aqua = ["QUARTER", 0];
  ahal = ["HALF-DOLLAR", 0];
  aone = ["ONE", 0];
  afiv = ["FIVE", 0];
  aten = ["TEN", 0];
  atwe = ["TWENTY", 0];
  afif = ["FIFTY", 0];
  ahun = ["HUNDRED", 0];
  cid = [];
}

/* Function to get values from the form and create proper money valut */
function getValues(form) {
  pen = form.pennies.value;
  apen[1] = pen * 0.01;
  nic = form.nickels.value;
  anic[1] = nic * 0.05;
  dim = form.dimes.value;
  adim[1] = dim * 0.1;
  qua = form.quarters.value;
  aqua[1] = qua * 0.25;
  hal = form.halves.value;
  ahal[1] = hal * 0.5;
  one = form.ones.value;
  aone[1] = one;
  fiv = form.fives.value;
  afiv[1] = fiv * 5;
  ten = form.tens.value;
  aten[1] = ten * 10;
  twe = form.twenties.value;
  atwe[1] = twe * 20;
  fif = form.fifties.value;
  afif[1] = fif * 50;
  hun = form.hundreds.value;
  ahun[1] = hun * 100;
  cas = form.cash.value;
  pri = form.price.value;
  cid = [apen, anic, adim, aqua, ahal, aone, afiv, aten, atwe, afif, ahun];
}

/* Main Function to check state of the Cash Register */
function checkCashRegister(price, cash, cid) {
  var change = [];
  var difference = cash - price; // Difference between the price and cash
  var hu = cid[10][1] / 100; // Set values of how many of each bill/coin
  var ff = cid[9][1] / 50;
  var tw = cid[8][1] / 20;
  var te = cid[7][1] / 10;
  var fi = cid[6][1] / 5;
  var on = cid[5][1] / 1;
  var ha = cid[4][1] / 0.5;
  var qu = cid[3][1] / 0.25;
  var di = cid[2][1] / 0.1;
  var ni = cid[1][1] / 0.05;
  var pe = cid[0][1] / 0.01;

  // Check Hundreds
  if (difference >= 100 && hu >= 1) {
    // If the difference is greater or equal to 100 and the number of hundred bills is greater or equal to the difference divided by 100
    var hhu = 0;
    if (hu < difference / 100) {
      // If the number of hundred bills is less than the difference divided by 100
      hhu = hu;
    } else {
      hhu = Math.floor(difference / 100); // Number of hundreds in the difference
    }
    cid[10][1] = 100 * hhu; // Set the amount in the cid to 100 times * hhu
    difference -= 100 * hhu; // Remove that amount from the difference
    change.push(cid[10]); // Push the new cid into change
  }

  // Check Fifties
  if (difference >= 50 && ff >= 1) {
    var hff = 0;
    if (ff < difference / 50) {
      hff = ff;
    } else {
      hff = Math.floor(difference / 50);
    }
    cid[9][1] = 50 * hff;
    difference -= 50 * hff;
    change.push(cid[9]);
  }

  // Check Twenties
  if (difference >= 20 && tw >= 1) {
    var htw = 0;
    if (tw < difference / 20) {
      htw = tw;
    } else {
      htw = Math.floor(difference / 20);
    }
    cid[8][1] = 20 * htw;
    difference -= 20 * htw;
    change.push(cid[8]);
  }

  // Check Tens
  if (difference >= 10 && te >= 1) {
    var hte = 0;
    if (te < difference / 10) {
      hte = te;
    } else {
      hte = Math.floor(difference / 10);
    }
    cid[7][1] = 10 * hte;
    difference -= 10 * hte;
    change.push(cid[7]);
  }

  // Check Fives
  if (difference >= 5 && fi >= 1) {
    var hfi = 0;
    if (fi < difference / 5) {
      hfi = fi;
    } else {
      hfi = Math.floor(difference / 5);
    }
    cid[6][1] = 5 * hfi;
    difference -= 5 * hfi;
    change.push(cid[6]);
  }

  // Check Ones
  if (difference >= 1 && on >= 1) {
    var hon = 0;
    if (on < difference) {
      hon = on;
    } else {
      hon = Math.floor(difference);
    }
    cid[5][1] = hon;
    difference -= hon;
    change.push(cid[5]);
  }

  // Check Halves
  if (difference >= 0.5 && ha >= 1) {
    var hha = 0;
    if (ha < difference / 0.5) {
      hha = ha;
    } else {
      hha = Math.floor(difference / 0.5);
    }
    cid[4][1] = 0.5 * hha;
    difference -= 0.5 * hha;
    change.push(cid[4]);
  }

  // Check Quarters
  if (difference >= 0.25 && qu >= 1) {
    var hqu = 0;
    if (qu < difference / 0.25) {
      hqu = qu;
    } else {
      hqu = Math.floor(difference / 0.25);
    }
    cid[3][1] = 0.25 * hqu;
    difference -= 0.25 * hqu;
    change.push(cid[3]);
  }

  // Check Dimes
  if (difference >= 0.1 && di >= 1) {
    var hdi = 0;
    if (di < difference / 0.1) {
      hdi = di;
    } else {
      hdi = Math.floor(difference / 0.1);
    }
    cid[2][1] = 0.1 * hdi;
    difference -= 0.1 * hdi;
    change.push(cid[2]);
  }

  // Check Nickels
  if (difference >= 0.05 && ni >= 1) {
    var hni = 0;
    if (ni < difference / 0.05) {
      hni = ni;
    } else {
      hni = Math.floor(difference / 0.05);
    }
    cid[1][1] = 0.05 * hni;
    difference -= 0.05 * hni;
    change.push(cid[1]);
  }

  // Check Pennies
  while (difference >= 0.01 && pe >= 1) {
    var hpe = 0;
    if (pe < difference / 0.01) {
      hpe = pe;
    } else {
      hpe = Math.fround(difference / 0.01);
    }
    cid[0][1] = 0.01 * hpe;
    difference -= 0.01 * hpe;
    change.push(cid[0]);
  }

  // Check if the change covers the difference, if the cash is less than the price, and if no change was necessary
  var ap = 0;
  var app = 0;
  var newDifference = cash - price; // Difference between cash and price

  for (var ii = 0; ii < change.length; ii++) {
    var p = change[ii][1];
    ap += p;
  }

  for (var ix = 0; ix < cid.length; ix++) {
    var pp = cid[ix][1];
    app += pp;
  }

  if (cash - price < 0) {
    window.alert("Not enough money.");
    closed = true; // These attempt to make closed true, which should shut down the rest of the program
  } else if (ap < newDifference) {
    window.alert("Insufficient Funds.");
    closed = true;
  } else if (ap == newDifference && ap === 0) {
    window.alert("No change necessary.");
    closed = true;
  }
  thechange = change;
}

// Function to create messages
var end = [];
function messages() {
  if (closed === false) {
    // Makes sure this doesn't run if conditionals above went through (if the closed is true)
    for (var c = 0; c < thechange.length; c++) {
      // C++? I see what you did there :)
      // These loops attempt to convert the arrays into sentences
      var typeofmoney = thechange[c][0]; // Type of money
      var howmany = thechange[c][1]; // How much money

      // Check Pennies
      if (typeofmoney == "PENNY") {
        howmany /= 0.01; // Howmany becomes the amount divided by 0.01
        howmany = Math.floor(howmany); // Howmany becomes a whole number
        if (howmany > 1) {
          // If there's more than one penny
          end.unshift(howmany + " pennies"); // Unshift the number and " pennies"
        } else if (howmany == 1) {
          // If there's only one, unshift howmany and just " penny"
          end.unshift(howmany + " penny");
        } else if (howmany === 0) {
          // Should never run, this is fallback in case it does
          end.unshift("no pennies");
        }
      }

      // Check Nickels
      if (typeofmoney == "NICKEL") {
        howmany /= 0.05;
        if (howmany > 1) {
          end.unshift(howmany + " nickels");
        } else if (howmany == 1) {
          end.unshift(howmany + " nickel");
        } else if (howmany === 0) {
          end.unshift("no nickels");
        }
      }

      // Check Dimes
      if (typeofmoney == "DIME") {
        howmany /= 0.1;
        if (howmany > 1) {
          end.unshift(howmany + " dimes");
        } else if (howmany == 1) {
          end.unshift(howmany + " dime");
        } else if (howmany === 0) {
          end.unshift("no dimes");
        }
      }

      // Check Quarters
      if (typeofmoney == "QUARTER") {
        howmany /= 0.25;
        if (howmany > 1) {
          end.unshift(howmany + " quarters");
        } else if (howmany == 1) {
          end.unshift(howmany + " quarter");
        } else if (howmany === 0) {
          end.unshift("no quarters");
        }
      }

      // Check Halves
      if (typeofmoney == "HALF-DOLLAR") {
        howmany /= 0.5;
        if (howmany > 1) {
          end.unshift(howmany + " half-dollars");
        } else if (howmany == 1) {
          end.unshift(howmany + " half-dollar");
        } else if (howmany === 0) {
          end.unshift("no half-dollars");
        }
      }

      // Check Ones
      if (typeofmoney == "ONE") {
        howmany /= 1;
        if (howmany > 1) {
          end.unshift(howmany + " ones");
        } else if (howmany == 1) {
          end.unshift(howmany + " one");
        } else if (howmany === 0) {
          end.unshift("no ones");
        }
      }

      // Check Fives
      if (typeofmoney == "FIVE") {
        howmany /= 5;
        if (howmany > 1) {
          end.unshift(howmany + " fives");
        } else if (howmany == 1) {
          end.unshift(howmany + " five");
        } else if (howmany === 0) {
          end.unshift("no fives");
        }
      }

      // Check Tens
      if (typeofmoney == "TEN") {
        howmany /= 10;
        if (howmany > 1) {
          end.unshift(howmany + " tens");
        } else if (howmany == 1) {
          end.unshift(howmany + " ten");
        } else if (howmany === 0) {
          end.unshift("no tens");
        }
      }

      // Check Twenties
      if (typeofmoney == "TWENTY") {
        howmany /= 20;
        if (howmany > 1) {
          end.unshift(howmany + " twenties");
        } else if (howmany == 1) {
          end.unshift(howmany + " twenty");
        } else if (howmany === 0) {
          end.unshift("no twenties");
        }
      }

      // Check Fifties
      if (typeofmoney == "FIFTY") {
        howmany /= 50;
        if (howmany > 1) {
          end.unshift(howmany + " fifties");
        } else if (howmany == 1) {
          end.unshift(howmany + " fifty");
        } else if (howmany === 0) {
          end.unshift("no fifties");
        }
      }

      // Check Hundreds
      if (typeofmoney == "HUNDRED") {
        howmany /= 100;
        if (howmany > 1) {
          end.unshift(howmany + " hundreds");
        } else if (howmany == 1) {
          end.unshift(howmany + " hundred");
        } else if (howmany === 0) {
          end.unshift("no hundreds");
        }
      }
    }
  }
}

// Function to create grammatically correct messages
function grammyCorrect() {
  if (closed === false) {
    var grammar = [];
    if (end.length > 2) {
      // If end has more than two
      for (var gra = 0; gra <= end.length - 2; gra++) {
        // Runs at least twice, logically. Pushes all values but the last
        var gram = end[gra] + ", ";
        grammar.push(gram);
      }
      var lastend = end[end.length - 1];
      grammar.push("and " + lastend); // Pushes the final value
    } else if (end.length == 2) {
      // Works if there are only two values in end
      grammar.push(end[0] + " and " + end[1]);
    } else if (end.length == 1) {
      // Works if end is only one value
      grammar.push(end);
    }
    var string = "";
    for (var str = 0; str < grammar.length; str++) {
      string += grammar[str]; // String becomes all the values of grammar
    }
    //string += "."; // A period
    window.alert(string); // Alerts the final value
  }
}

// Function to control messages
function openclosed() {
  if (closed === false) {
    // Attempt to stop program if closed is false
    messages();
    grammyCorrect();
  }
}

// Fire function starts everything
function calc() {
  // Invoked by the button. Resets the system, gets the values, calculates change, and ultimately converts it into a string
  reset();
  getValues(all);
  checkCashRegister(pri, cas, cid);
  openclosed();
}

function getGoldZakat(){
    let goldAmount = document.getElementById('goldValue').value;
    if (goldAmount >= 7.5 )
    {
        let goldZakat = goldAmount * 130000 / 40;
        document.getElementById('goldResultShow').innerText ="Zakat of Your Gold = " + goldZakat;
    } 
      else
    { 
      document.getElementById('goldResultShow').innerText = "Your Gold Zakat is not Applicable"

    }
  }
function getSilverZakat(){
    let silverAmount = document.getElementById('silverValue').value;
    if (silverAmount >= 52.5 )
    {
        let silverZakat = silverAmount * 1500 / 40;
        document.getElementById('silverResultShow').innerText = "Zakat of Your Silver = " + silverZakat;
    } 
      else
    { 
      document.getElementById('silverResultShow').innerText = "Your silver Zakat is not Applicable"

    }
}

function getCashZakat(){
    let cashAmount = document.getElementById('cashValue').value;
    if (cashAmount >= 80000 )
    {
        let cashZakat = cashAmount / 40;
        document.getElementById('cashResultShow').innerText ="Zakat of Your Cash = " + cashZakat;
    } 
      else
    { 
      document.getElementById('cashResultShow').innerText = "Your cash Zakat is not Applicable"

    }
  }
 
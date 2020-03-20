
var nr_klikniecia = 1;
var pola = new Array(9);
var w = new Array(9);
var wygrana = false;

function start1()
{ 
    var tresc = "";

    for(i=0 ; i<9 ; i++)
    {
        pola[i] = "p" + i;
        w[i] = i;

        tresc = tresc + '<div class="pole" onclick="akcja('+i+')" id="'+pola[i]+'"></div>';

        if((i+1)%3==0)
        {
            tresc = tresc + '<div style="clear:both" ></div>';
        }
    }

    document.getElementById("gra").innerHTML = tresc; 

    document.getElementById("akcja1").style.color = "rgb(211, 0, 0)";
    document.getElementById("akcja1").innerHTML = " Krzyżyk";
}

function akcja(nr)
{
       
    if(nr_klikniecia%2 == 0)
    {
        document.getElementById(pola[nr]).style.color = "rgb(0, 161, 0)";
        document.getElementById(pola[nr]).innerHTML = "O";

        document.getElementById(pola[nr]).style.border = "medium solid magenta";
        document.getElementById(pola[nr]).style.background = "khaki";

        document.getElementById("akcja1").style.color = "rgb(211, 0, 0)";
        document.getElementById("akcja1").innerHTML = " Krzyżyk";

        w[nr] = "O";
    }
    else
    {
        document.getElementById(pola[nr]).style.color = "rgb(211, 0, 0)";
        document.getElementById(pola[nr]).innerHTML = "X";

        document.getElementById(pola[nr]).style.border = "medium solid magenta";
        document.getElementById(pola[nr]).style.background = "khaki";

        document.getElementById("akcja1").style.color = "rgb(0, 161, 0)";
        document.getElementById("akcja1").innerHTML = " Kółko";

        w[nr] = "X";
    }

    wyl_klikanie(nr);
    sprawdzanie();

    nr_klikniecia++;
}

function wyl_klikanie(nr)
{
    document.getElementById(pola[nr]).onclick = "";
    document.getElementById(pola[nr]).style.cursor = "default";
}

function sprawdzanie() 
{
    var koniec = false;

    var w1;
    var w2;
    var w3;

    if(  (w[0] == w[4]) && (w[0] == w[8])  )
    {
        w1 = 0; w2 = 4; w3 = 8;

        koniec = true;
        wygrana = true;
    }
    else if(  (w[2] == w[4]) && (w[2] == w[6])  )
    {
        w1 = 2; w2 = 4; w3 = 6;
        koniec = true;
        wygrana = true;
    }

    for( i=0 ; i<9 ; i=i+3)
    {
        if(  (w[i] == w[i+1]) && (w[i] == w[i+2])  )
        {
            w1 = i; w2 = i+1; w3 = i+2;
            koniec = true;
            wygrana = true;
        }
    }
    for( i=0 ; i<3 ; i++)
    {
        if(  (w[i] == w[i+3]) && (w[i] == w[i+6])  )
        {
            w1 = i; w2 = i+3; w3 = i+6;
            koniec = true;
            wygrana = true;
        }
    }  
    if(nr_klikniecia >= 9)
    {
        koniec = true;
    }

    if(koniec == true)
    {
        for( i=0 ; i<9 ; i++ )
        {
            wyl_klikanie(i);

            document.getElementById(pola[i]).style.border = "medium solid magenta";
            document.getElementById(pola[i]).style.background = "khaki";
        }

        if(wygrana == true)
        {
            document.getElementById(pola[w1]).style.background = "#ffd700";
            document.getElementById(pola[w2]).style.background = "#ffd700";
            document.getElementById(pola[w3]).style.background = "#ffd700";

            document.getElementById("akcja0").innerHTML="Wygrały:&nbsp";
            if(w[w1] == "O")
            {
                document.getElementById("akcja1").style.color = "rgb(0, 161, 0)";
                document.getElementById("akcja1").innerHTML = " Kółka";
            }
            else if(w[w1] == "X")
            {
                document.getElementById("akcja1").style.color = "rgb(211, 0, 0)";
                document.getElementById("akcja1").innerHTML = " Krzyżyki";
            }
        }
        else
        {
            document.getElementById("akcja0").innerHTML="REMIS !!!";
            document.getElementById("akcja1").innerHTML = "";
        }

        document.getElementById("po_grze").innerHTML='<button class="przycisk" onclick="location.reload();">Zagraj jeszcze raz !</button>';
    }
    
}
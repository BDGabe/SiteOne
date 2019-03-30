var puns = [
    'You rock my world!',
    'You\'re sedimented into my heart!',
    'We have great chemistry.',
    'You\'re my world!',
    'You\'re all that composites my mind!',
    'I lava you!',
    'I\'ll never take you for granite.',
    'You\'re the moon and I\'m the tides.',
    'You\'re the basalt of the Earth.',
    'I promise to be gneiss to you!',
    'Let\'s make like sediments and get laid. ;)',
    'I wanna party allanite long with you!',
    'I can\'t see any faults in you.',
    'I hope you\'re cummingtonite... Over to my house.',
    'You\'re so sweet, I could take albite outta you!',
    'Let\'s take a nappe.',
    'You make my orogenous zones feel weird.',
    'There\'s no one crater than you!',
    'Why don\'t you date me?',
    'When you leave, I sulpher so much!',
    'I wanna strata future with you!',
    'I really dig you!',
    'You\'re a lode of fun!',
    'If you were liquor, I\'d be an alkalic.',
    'You\'re a groundbreaking person!',
    'I wish I was boulder, so I could take you out!',
    'We make a rock solid couple.',
]

var yourPun = document.getElementById("newPun");

function newPun()
{
    var randNum = Math.floor(Math.random() * puns.length);

    document.getElementById('punDisplay').innerHTML = puns[randNum];
}

function addPun()
{
    if (yourPun.value != '')
    {
        puns.push(yourPun.value);
        console.log('New Pun: ' + puns.join(', '));

        document.getElementById('punConfirm').innerHTML = 'Pun Added!';
    }
    yourPun.value = '';
}

function checkValentinesDate()
{
    var currDate = new Date();
    var day = currDate.getDate();
    var month = currDate.getMonth() + 1;

    if (day < 10) {
        day = '0' + day
    }

    if (month < 10) {
        month = '0' + month
    }

    currDate = month + '/' + day;

    if (currDate == '02/14')
    {
        document.getElementById('isitValentines').innerHTML = 'It\'s Valentines Day!';
    }
    else
    {
        document.getElementById('isitValentines').innerHTML = 'It\'s not Valentines Day, but every day is special with you!';
    }
}

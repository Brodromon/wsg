var structura = new Vue ({
    el: '#app',
    data: {
        selectedCity: '',
        strPl: [
            {
                city: 'Bydgoszcz',
                text: [
                    'Kampus Wyższej Szkoły Gospodarki zajmuje 6 hektarów w samym centrum Bydgoszczy. Otwarty dla wszystkich: mieszkańców, studentów, turystów i przypadkowych przechodniów. Kampus WSG ma swoją niepowtarzalną historię. Z obszaru przemysłowego, otoczony opieką nowych właścicieli, zyskał wyjątkowy  - w skali regionu i kraju - wymiar i stał się nowoczesną, przyjazną rekreacjno – naukową przestrzenią.',
                    'Do dyspozycji studentów oraz gości są także inne jednostki przyuczelniane znajdujące się na terenie Kampusu: Centrum Fitness i Odnowy Biologicznej – Rewital a także Akademickie Centrum Medyczne, Akademicka Przestrzeń Kulturalna, Przedszkole Akademickie, Muzeum Fotografii, Hala Widowiskowo – Sportowa, Mensa Studencka, akademiki a także boiska sportowe, wypożyczalnia rowerów oraz przystań kajakowa.'
                ]
            },
            {
                city: 'Toruń',
                text: [
                    'Toruń, ośrodek o bogatych tradycjach akademickich, przez lata kojarzony był z dużym potencjałem myśli technicznej. Wiele toruńskich budowli i konstrukcji ma unikatowy charakter. Pomimo tak rozległej infrastruktury technicznej miasto przez wiele lat nie decydowało się na stworzenie warunków do kształcenia kadry technicznej na wyższym poziomie.',
                    'Uczelnia od kilku lat intensywnie rozwija obszary tzw. kierunków zamawianych, włączając się w kampanie przygotowania kadr inżynierskich dla potrzeb gospodarki. Wśród 20 kierunków WSG realizuje m.in.: architekturę, budownictwo, mechatronikę, informatykę, zarządzanie i inżynierię produkcji. Dzięki projektom oraz licznym partnerstwom branżowym uczelnia od kilku lat prowadzi w Toruniu studia inżynierskie a także studia podyplomowe oraz specjalistyczne szkolenia. Władzę Wydziału wierzą, że innowacyjne studia inżynierskie zachęcą do pozostania w naszym regionie absolwentów reprezentujących poszukiwane przez pracodawców zawody.',
                    'Wyższa Szkoła Gospodarki dysponuje potencjałem, który pozwala na elastyczne podejście do oferty, stąd w pierwszych latach funkcjonowania Wydziału uczelnia konfrontuje swoje założenia z zainteresowaniem konkretnymi kompetencjami ze strony kandydatów.'
                   ]
            },
            {
                city: 'Malbork',
                text: [
                    'Malbork jest kolejnym z Wydziałów Wyższej Szkoły Gospodarki, w którym duży nacisk kładziemy na rozwój przedsiębiorczości akademickiej i stosowanie wiedzy i wyników badań naukowych w praktyce gospodarczej i społecznej, stąd nazwa Wydziału - Zarządzania i Inżynierii Społecznej.',
                    'Przedmiotem działalności edukacyjnej i naukowo-badawczej Uczelni jest funkcjonowanie gospodarki wolnorynkowej i rozwój przedsiębiorczości w Polsce i na świecie we wszystkich ich aspektach: ekonomicznym (ekonomia, zarządzanie, logistyka), społeczno-kulturowym (socjologia, kulturoznawstwo) przestrzennym (geografia, urbanistyka) i technologicznym (informatyka, architektura, inżynieria produkcji).',
                    'Nowoczesne kształcenie - uniwersalna wiedza połączona ze specjalistycznymi umiejętnościami - dostosowane jest do zmieniającej się rzeczywistości i dynamicznego rynku pracy. Składa się na nie kilka filarów: wiedza ekonomiczna, znakomite opanowanie narzędzi informatycznych, znajomość języków obcych, filozofia, wiedza prawnicza. Dużą rolę przykładamy do nowoczesnych technologii w dydaktyce, w szczególności do metod e-learningowych, czyli kształcenia przy pomocy narzędzi elektronicznych.'
                ]
            },
            {
                city: 'Ełk',
                text: [
                    'Ełk wraz z Gołdapią i Oleckiem tworzą ekologiczny, etnicznie zróżnicowany subregion EGO, nazwany "zielonymi płucami Polski". Pełen walorów, które należy zagospodarować tak, by przynosiły korzyści jego mieszkańcom, przyciągały turystów i zachęcały inwestorów. Potrzeba edukacji w tym zakresie przyczyniła się do powstania w 2001 roku Wydziału Gospodarki Turystycznej w Ełku. W porozumieniu z samorządem lokalnym nasza uczelnia podjęła się przygotowania profesjonalnych, nowoczesnych kadr, które świadomie i odpowiedzialnie włączają się w realizację strategii rozwoju tego wyjątkowego obszaru.',
                    'Lokalni przedsiębiorcy cenią sobie współpracę z wydziałem, współtworząc ofertę studiów podyplomowych i innych form edukacyjnych służących specyficznym potrzebom rozwojowym regionu.'
                ]
            },
            {
                city: 'Inowrocław',
                text: [
                    'Znany z wyjątkowych walorów uzdrowiskowych Inowrocław pozostawał jednym z nielicznych tej wielkości miast, w którym nie funkcjonowała dotąd żadna uczelnia. WSG, w porozumieniu z lokalnymi władzami, podjęła się stworzenia kompleksowego programu rozwoju dla mieszkańców Inowrocławia, w oparciu o zasoby miasta oraz potencjał, jakim dysponuje uczelnia. We wrześniu 2006 r. Władze Inowrocławia i WSG podpisały list intencyjny, dzięki czemu utworzony został Wydział Zarządzania i Inżynierii Społecznej Rozpoczął się intensywny rozwój wydziału - uczelnia szybko zyskała lokalnych partnerów w sferze przedsiębiorczości, kultury i sportu.'
                ]
            },
            {
                city: 'Piła',
                text: [
                    'Wydział Gospodarki i Techniki kształci na skorelowanych z potrzebami szkolnictwa wyższego w regionie, obszarach studiów opartych na kierunkach ekonomicznych – ekonomii i zarządzaniu.',
                    'Studia licencjackie zapewniają zdobycie wiedzy i umiejętności w określonym obszarze, przygotowują do pracy w wybranym zawodzie, a ich absolwent uzyskuje tytuł licencjata w ciągu 6 lub 7 semestrów nauki. Po ich ukończeniu można kontynuować naukę na studiach drugiego stopnia oraz studiach podyplomowych.'   
                ]
            },
            {
                city: 'Słupsk',
                text: [
                    'W Słupsku coraz więcej zwolenników zyskuje, tak promowana przez Unię Europejską, idea kształcenia ustawicznego. Ciągłe doskonalenie stało się modne nie tylko wśród osób dorosłych. Coraz częściej rodzice przyprowadzają swoje dzieci, aby te mogły poznawać nowe rzeczy i nabywać nowe umiejętności. Nikogo już nie dziwi, że niemowlęta chodzą na basen, czy uczą się języków obcych.',
                    'Pomorski Uniwersytet Trzeciego Wieku - program zajęć obejmuje zarówno cykl wykładów jak i różne propozycje warsztatów, z których korzysta w chwili obecnej blisko 70 uczestników i cały czas prowadzony jest nabór dla wszystkich chętnych.'
                ]
            }
        ],
        nSelectedPl: [
            'Uczelnia działa w oparciu o koncepcję uniwersytetu przedsiębiorczości, w modelu organizacji uczącej się.',
            'Misja Wyższej Szkoły Gospodarki została wypracowana w wyniku wieloletniego gromadzenia i rozwijania doświadczeń łączenia edukacji z nauką i przedsiębiorczością.',
            'Filarami działalności Wyższej Szkoły Gospodarki, najstarszej niepublicznej Uczelni w Bydgoszczy, są umiejętności, kompetencje i praktyczne ich zastosowanie.  ',
            'Nazwa Wyższa Szkoła Gospodarki obowiązuje od stycznia 2005 r. Wcześniej uczelnia znana była, jako Wyższa Pomorska Szkoła Turystyki i Hotelarstwa w Bydgoszczy. WSG jest organizacją non profit. Wszystkie fundusze przeznaczane są na rozwój Uczelni, rozbudowę nowoczesnej bazy dydaktycznej oraz na utrzymanie wysokiego poziomu kształcenia i prowadzenie działalności naukowej.',
            'Wyższa Szkoła Gospodarki to nie tylko Bydgoszcz. Nasze Wydziały w Ełku, Pile, Malborku, Słupsku, Toruniu oraz Inowrocławiu, służą już mieszkańcom prawie całej północnej Polski.  ',
            'Wydziały realizują nie tylko zadania edukacyjne, ale także misję WSG związaną z otoczeniem społecznym. Dzięki konsultacjom ze środowiskiem biznesowym i administracją samorządową, nasza oferta edukacyjna realizowana w Wydziałach, odpowiada na potrzeby lokalnego rynku pracy.'
        ]
    }
})
import { useState } from 'react';
import HeaderGradient from '@/uiComponents/headerGradient/HeaderGradient';
import YearPeriod from '@/uiComponents/yearPeriod/YearPeriod';
import EventsSlider from '@/featureComponents/eventsSlider/EventsSlider';
import PeriodOrbit from '@/featureComponents/periodOrbit/PeriodOrbit';
import './historicalDatesSection.scss';

export type TPeriodEvents = {
    year: number;
    eventDescription: string;
};

export type TPeriod = {
    id: number;
    periodName: string;
    beginYear: number;
    endYear: number;
    events: TPeriodEvents[];
};

const HistoricalDatesSection: React.FC = () => {
    const [currentPeriodId, setCurrentPeriodId] = useState<number | null>(1);
    const [isRunningAnimation, setIsRunningAnimation] = useState(false);
    const [periods, setPeriods] = useState<TPeriod[]>([
        {
            id: 1,
            periodName: "Технологии",
            beginYear: 1980,
            endYear: 1986,
            events: [
                {
                    year: 1980,
                    eventDescription: "Sinclair Research выпускает домашний компьютер ZX80"
                },
                {
                    year: 1982,
                    eventDescription: "Появился домашний компьютер ZX S выпущенный брендом компаний Sincla Reserch"
                },
                {
                    year: 1983,
                    eventDescription: "ARPANET поменяла основной протокол с NCP на TCP/IP"
                },
                {
                    year: 1984,
                    eventDescription: "В продажу поступил первый персональный компьютер Apple Macintosh"
                },
                {
                    year: 1986,
                    eventDescription: "Открытие высокотемпературной сверхпроводимости (К. Мюллер, Г. Беднорц)"
                },
            ],
        },
        {
            id: 2,
            periodName: "Кино",
            beginYear: 1987,
            endYear: 1991,
            events: [
                {
                    year: 1987,
                    eventDescription: "«Хищник»/Predator, США (реж. Джон Мактирнан)"
                },
                {
                    year: 1988,
                    eventDescription: "«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)"
                },
                {
                    year: 1989,
                    eventDescription: "«Назад в будущее 2»/Black To The Future, США (реж. Роберт Земекис)"
                },
                {
                    year: 1990,
                    eventDescription: "«Крепкий орешек 2»/Die Hard 2, США (реж. Ренни Харлин)"
                },
                {
                    year: 1991,
                    eventDescription: "«Двойной удар» - американский боевик с Жан-Клодом Ван Даммом в двойной главной роли"
                },
            ],
        },
        {
            id: 3,
            periodName: "Литература",
            beginYear: 1992,
            endYear: 1997,
            events: [
                {
                    year: 1992,
                    eventDescription: "Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах»"
                },
                {
                    year: 1994,
                    eventDescription: "«Бессонница» - роман Стивена Кинга"
                },
                {
                    year: 1995,
                    eventDescription: "Нобелевская премия по литературе - Шеймас Хини"
                },
                {
                    year: 1997,
                    eventDescription: "В издательстве Bloomsbury вышла книга «Гарри Поттер и философский камень», тиражом 1000 экземпляров"
                },
                {
                    year: 1997,
                    eventDescription: "«Замок на стыке миров» — Виктор Чирков"
                },
            ],
        },
        {
            id: 4,
            periodName: "Культура",
            beginYear: 1999,
            endYear: 2004,
            events: [
                {
                    year: 1999,
                    eventDescription: "Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона"
                },
                {
                    year: 2000,
                    eventDescription: "Возобновлено издание журнала «Театр»"
                },
                {
                    year: 2002,
                    eventDescription: "Премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон"
                },
                {
                    year: 2003,
                    eventDescription: "В Венеции проходили 50-я Венецианская биеннале и 60-й Венецианский кинофестиваль"
                },
                {
                    year: 2004,
                    eventDescription: "В Японии открылся подземный художественный музей Чичу на острове Наосима."
                },
            ],
        },
        {
            id: 5,
            periodName: "Спорт",
            beginYear: 2006,
            endYear: 2014,
            events: [
                {
                    year: 2006,
                    eventDescription: "Баскетбольный клуб ЦСКА стал победителем национального первентсва России"
                },
                {
                    year: 2008,
                    eventDescription: "С 8 по 24 августа в Пекине прошли 29-е летние Олимпийские игры"
                },
                {
                    year: 2010,
                    eventDescription: "13 - 28 февраля в Ванкувере: Зимние Олимпийские игры 2010 года"
                },
                {
                    year: 2012,
                    eventDescription: "2 августа - Летние Олимпийские игры"
                },
                {
                    year: 2014,
                    eventDescription: "XXII Зимние Олимпийские игры (Сочи, Россия)"
                },
            ],
        },
        {
            id: 6,
            periodName: "Наука",
            beginYear: 2015,
            endYear: 2022,
            events: [
                {
                    year: 2015,
                    eventDescription: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
                },
                {
                    year: 2016,
                    eventDescription: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
                },
                {
                    year: 2017,
                    eventDescription: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
                },
                {
                    year: 2018,
                    eventDescription: "Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца"
                },
                {
                    year: 2019,
                    eventDescription: "Google объявил о создании 53-кубитного квантового компьютера"
                },
                {
                    year: 2020,
                    eventDescription: "Корабль Crew Dragon вернулся на Землю из первого пилотируемого полёта"
                },
            ],
        },
    ]);
    
    const currentPeriodData = periods.find((period) => period.id === currentPeriodId);
    const beginYearOfCurrentPeriod = currentPeriodData?.beginYear ?? null;
    const endYearOfCurrentPeriod = currentPeriodData?.endYear ?? null;
    const listEvents = currentPeriodData?.events ?? [];
    const periodName = currentPeriodData?.periodName ?? "";

    const onChangeCurrentPeriodId = (newPeriodId: number | null) => {
        setCurrentPeriodId(newPeriodId);
    }

    const onChangeIsRunningAnimation = (isAnimated: boolean) => {
        setIsRunningAnimation(isAnimated)
    }

    return (
        <section className="historical-dates">
            <div className="historical-dates__wrapper">
                <HeaderGradient />
                <div className="historical-dates__period-orbit">
                    <PeriodOrbit 
                        periods={periods}
                        activePeriodId={currentPeriodId}
                        onChangeCurrentPeriodId={onChangeCurrentPeriodId}
                        isRunningAnimation={isRunningAnimation}
                        onChangeIsRunningAnimation={onChangeIsRunningAnimation}
                    />
                </div>
                <div className="historical-dates__period">
                    <YearPeriod year={beginYearOfCurrentPeriod} classList="historical-dates__begin-year" />
                    <YearPeriod year={endYearOfCurrentPeriod} classList="historical-dates__end-year" />
                </div>
                <div className="historical-dates__period-name">
                    {periodName}
                </div>
                <div className="historical-dates__events-slider">
                    <EventsSlider listEvents={listEvents} isAnimated={isRunningAnimation} />
                </div>
            </div>
            <div className="historical-dates__horizontal-line"></div>
            <div className="historical-dates__vertical-line position-lf"></div>
            <div className="historical-dates__vertical-line position-cn"></div>
            <div className="historical-dates__vertical-line position-rg"></div>
        </section>
    )
}

export default HistoricalDatesSection;

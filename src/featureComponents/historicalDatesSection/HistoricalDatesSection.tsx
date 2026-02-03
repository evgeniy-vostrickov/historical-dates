import { useState } from 'react';
import HeaderGradient from '@/uiComponents/headerGradient/HeaderGradient';
import YearPeriod from '@/uiComponents/yearPeriod/YearPeriod';
import SwitchPeriod from '@/featureComponents/switchPeriod/SwitchPeriod';
import EventsSlider from '@/featureComponents/eventsSlider/EventsSlider';
import PeriodOrbit from '@/featureComponents/periodOrbit/PeriodOrbit';
import './historicalDatesSection.scss';

type TPeriodEvents = {
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
    const [periods, setPeriods] = useState<TPeriod[]>([
        {
            id: 1,
            periodName: "Литература",
            beginYear: 1992,
            endYear: 1998,
            events: [
                {
                    year: 1992,
                    eventDescription: "1992 Литература описание события"
                },
                {
                    year: 1993,
                    eventDescription: "1993 Литература описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Литература описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Литература описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Литература описание события"
                },
            ],
        },
        {
            id: 2,
            periodName: "Музыка",
            beginYear: 1999,
            endYear: 2005,
            events: [
                {
                    year: 1992,
                    eventDescription: "1992 Музыка описание события"
                },
                {
                    year: 1993,
                    eventDescription: "1993 Музыка описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Музыка описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Музыка описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Музыка описание события"
                },
            ],
        },
        {
            id: 3,
            periodName: "История",
            beginYear: 2006,
            endYear: 2010,
            events: [
                {
                    year: 1992,
                    eventDescription: "1992 История описание события"
                },
                {
                    year: 1993,
                    eventDescription: "1993 История описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 История описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 История описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 История описание события"
                },
            ],
        },
        {
            id: 4,
            periodName: "Архитектура",
            beginYear: 2011,
            endYear: 2016,
            events: [
                {
                    year: 1992,
                    eventDescription: "1992 Архитектура описание события"
                },
                {
                    year: 1993,
                    eventDescription: "1993 Архитектура описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Архитектура описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Архитектура описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Архитектура описание события"
                },
            ],
        },
        {
            id: 5,
            periodName: "Театр",
            beginYear: 2017,
            endYear: 2021,
            events: [
                {
                    year: 1992,
                    eventDescription: "1992 Театр описание события"
                },
                {
                    year: 1993,
                    eventDescription: "1993 Театр описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Театр описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Театр описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 Театр описание события"
                },
            ],
        },
        {
            id: 6,
            periodName: "ИИ",
            beginYear: 2022,
            endYear: 2025,
            events: [
                {
                    year: 1992,
                    eventDescription: "1992 ИИ описание события"
                },
                {
                    year: 1993,
                    eventDescription: "1993 ИИ описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 ИИ описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 ИИ описание события"
                },
                {
                    year: 1994,
                    eventDescription: "1994 ИИ описание события"
                },
            ],
        },
    ]);
    
    const beginYearOfCurrentPeriod = periods.find((period) => period.id === currentPeriodId)?.beginYear ?? null
    const endYearOfCurrentPeriod = periods.find((period) => period.id === currentPeriodId)?.endYear ?? null

    const onChangeCurrentPeriodId = (newPeriodId: number | null) => {
        setCurrentPeriodId(newPeriodId)
    }

    return (
        <section className="historical-dates">
            <div className="historical-dates__wrapper">
                <HeaderGradient />
                <div className="historical-dates__period-orbit">
                    <PeriodOrbit periods={periods} activePeriodId={currentPeriodId} onChangeCurrentPeriodId={onChangeCurrentPeriodId} />
                </div>
                <div className="historical-dates__period">
                    <YearPeriod year={beginYearOfCurrentPeriod} classList="historical-dates__begin-year" />
                    <YearPeriod year={endYearOfCurrentPeriod} classList="historical-dates__end-year" />
                </div>
                <div className="historical-dates__switch-period">
                    <SwitchPeriod currentPeriod={currentPeriodId} totalPeriod={periods.length} />
                </div>
                <div className="historical-dates__events-slider">
                    <EventsSlider />
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

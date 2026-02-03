import HeaderGradient from '@/uiComponents/headerGradient/HeaderGradient';
import YearPeriod from '@/uiComponents/yearPeriod/YearPeriod';
import SwitchPeriod from '@/featureComponents/switchPeriod/SwitchPeriod';
import './historicalDatesSection.scss';

const HistoricalDatesSection: React.FC = () => {
    return (
        <section className="historical-dates">
            <div className="historical-dates__wrapper">
                <HeaderGradient />
                <div className="historical-dates__period">
                    <YearPeriod year={2015} classList="historical-dates__begin-year" />
                    <YearPeriod year={2022} classList="historical-dates__end-year" />
                </div>
                <div className="historical-dates__switch-period">
                    <SwitchPeriod currentPeriod={1} totalPeriod={6} />
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

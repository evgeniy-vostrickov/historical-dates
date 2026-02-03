import classNames from "classnames";
import './yearPeriod.scss';

type TYearPeriod = {
    year: number | null;
    classList?: string;
}

const YearPeriod: React.FC<TYearPeriod> = ({year, classList = ""}) => {
    if (!year) {
        return (<div className={classNames("year-period", classList)}></div>)
    }
    
    return  (
        <div className={classNames("year-period", classList)}>
            {year}
        </div>
    )
}

export default YearPeriod;

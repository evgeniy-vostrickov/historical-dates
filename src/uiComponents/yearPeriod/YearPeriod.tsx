import classNames from "classnames";
import './yearPeriod.scss';

type TYearPeriod = {
    year: number;
    classList?: string;
}

const YearPeriod: React.FC<TYearPeriod> = ({year, classList = ""}) => {
    return  (
        <div className={classNames("year-period", classList)}>
            {year}
        </div>
    )
}

export default YearPeriod;

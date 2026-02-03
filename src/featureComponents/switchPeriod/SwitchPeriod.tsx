import RoundContainer from '@/uiComponents/roundContainer/RoundContainer';
import ArrowIcon from '@/assets/icons/arrow.svg';
import { convertPeriodToString } from '@/helpers/convertPeriodToString';
import './switchPeriod.scss';
import classNames from 'classnames';

type TSwitchPeriod = {
    currentPeriod: number | null;
    totalPeriod: number;
    classList?: string;
}

const SwitchPeriod: React.FC<TSwitchPeriod> = ({currentPeriod, totalPeriod, classList=""}) => {    
    return (
        <div className={classNames("switch-period", classList)}>
            <div className="switch-period__pagination">
                {convertPeriodToString(currentPeriod ?? 0)}/{convertPeriodToString(totalPeriod)}
            </div>
            <RoundContainer containerClassName={classNames("switch-period__prev", {"switch-period__navigation_disabled": currentPeriod === 1})}>
                <ArrowIcon className="switch-period__navigation__icon" />
            </RoundContainer>
            <RoundContainer containerClassName={classNames("switch-period__next", {"switch-period__navigation_disabled": currentPeriod === totalPeriod})}>
                <ArrowIcon className="switch-period__navigation__icon" />
            </RoundContainer>
        </div>
    )
}

export default SwitchPeriod;

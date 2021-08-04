import s from './line.module.css';
import { PartEl } from './partElement/partelement';

export let Line = (props) => {

    let part = props.givealldata;


    
    var MassParts = []; 
    if (Array.isArray(part)) { 
        
        for (let i = 0; i < part.length; i++) {
            MassParts.push(<PartEl ind = {i} thego={props.thego} time={part[i].Date}/>);
        }
    }

    return (
        <div>
            <div className={s.line}>
                {MassParts}
            </div>
            <div onClick={props.GoTimeLine} className={s.play}><svg class={s.circle_fill}>
                <circle   fill="none" cx="41" cy="41" r="31" stroke="#fff" stroke-width="1"></circle>
                <polygon fill="none" stroke="#fff" stroke-width="1" points="32,25 32,58 60,42"></polygon>
            </svg>
            </div>
        </div>
    )
}
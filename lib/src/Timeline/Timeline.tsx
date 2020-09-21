import React from "react";
import "./timeline-style.scss";

export interface TimelineListItem {
    title: string;
    time: string;
    desc?: string;
}

type TimelineDirection = "vertical" | "horizontal";

export interface TimelineProps {
    /** Element class */
    className?: string;
    /** Direction of timeline: `horizontal` or `vertical` */
    direction?: TimelineDirection;
    /** Element id */
    id?: string;
    /** List of item in timeline */
    list: Array<TimelineListItem>;
    /** on click callback on each item */
    onClick?: (index: number) => void;
}

function prepareList(list: Array<TimelineListItem>): Array<any> {
    const topList: Array<any> = [];
    const bottomList: Array<any> = [];
    for (let i: number = 0; i < list.length; i++) {
        if (i % 2) {
            topList.push(list[i]);
            bottomList.push(null);
        } else {
            bottomList.push(list[i]);
            topList.push(null);
        }
    }
    return [topList, bottomList];
}

/** Timeline is component to display of a list of events in chronological order */
export const Timeline: React.FC<TimelineProps> = React.memo((props: TimelineProps) => {
    const direction: string = props.direction ? props.direction : "vertical";
    const preparedLists = prepareList(props.list);
    const topList: Array<TimelineListItem> = preparedLists[0];
    const bottomList: Array<TimelineListItem> = preparedLists[1];
    return (
        <div className={"form-group custom-timeline" + (props.className ? ` ${props.className}` : "")} id={props.id}>
            <div className={`timeline ${direction}` + (props.onClick ? " clickable" : "")}>
                {direction === "vertical" &&
                    props.list.map((item: TimelineListItem, i: number) => (
                        <div className="item-holder" key={i}>
                            <div className={i % 2 ? "direction-left" : "direction-right"}>
                                <div
                                    className="title-wrapper"
                                    onClick={() => {
                                        props.onClick && props.onClick(i);
                                    }}
                                >
                                    <div className="title">{item.title}</div>
                                    <div className="time-wrapper">
                                        <span className="time">{item.time}</span>
                                    </div>
                                    {item.desc && <div className="desc">{item.desc}</div>}
                                </div>
                            </div>
                        </div>
                    ))}

                {direction === "horizontal" &&
                    [1, 2, 3].map((loop: number) => (
                        <div className="row" key={loop}>
                            {loop === 1 &&
                                topList.map((item: TimelineListItem, i) => (
                                    <div className="item-holder" key={i} style={{ width: 100 / props.list.length + "%" }}>
                                        {item && (
                                            <div className="direction-top">
                                                <div
                                                    className="title-wrapper"
                                                    onClick={() => {
                                                        props.onClick && props.onClick(i);
                                                    }}
                                                >
                                                    <div className="title">{item.title}</div>
                                                    <div className="time-wrapper">
                                                        <span className="time">{item.time}</span>
                                                    </div>
                                                    {item.desc && <div className="desc">{item.desc}</div>}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            {loop === 2 && topList.map((item: any, i: number) => <div className="indicator-holder" key={i} style={{ width: 100 / props.list.length + "%" }} />)}
                            {loop === 3 &&
                                bottomList.map((item: TimelineListItem, i) => (
                                    <div className="item-holder" key={i} style={{ width: 100 / props.list.length + "%" }}>
                                        {item && (
                                            <div className="direction-bottom">
                                                <div
                                                    className="title-wrapper"
                                                    onClick={() => {
                                                        props.onClick && props.onClick(i);
                                                    }}
                                                >
                                                    <div className="title">{item.title}</div>
                                                    <div className="time-wrapper">
                                                        <span className="time">{item.time}</span>
                                                    </div>
                                                    {item.desc && <div className="desc">{item.desc}</div>}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    ))}
            </div>
        </div>
    );
});

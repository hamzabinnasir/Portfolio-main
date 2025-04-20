import "./Featured.css"
import React, { useEffect, useState } from "react"
import Headline from "../../components/Headline/Headline"
// importing Components and Datas
import List from "../../components/List/List"
import { listData } from "../../components/List/listData"
import { allData, packagingData, mockUpData, typographyData, photographyData, BackendProject } from "./data"
// Importing Gsap

export default function Fearured() {
    const [active, setActive] = useState("all");
    const [data, setData] = useState([]);
    const [classList, setClassList] = useState(false);

    useEffect(() => {
        switch (active) {
            case "all":
                setData(allData);
                setClassList(false);
                break;
            case "packagingData":
                setData(packagingData);
                setClassList(false);
                break;
            case "mockupData":
                setData(mockUpData);
                setClassList(false);
                break;
            case "typographyData":
                setData(typographyData);
                setClassList(false);
                break;
            case "photoGraphyData":
                setData(photographyData);
                setClassList(false);
                break;
            case "backendProject":
                setData(BackendProject);
                setClassList(true);
                break;
            default:
                break;
        }
    }, [active]);

    return (
        <>
            <div id="featuredSection">
                <Headline text={"Featured"} subText={"Portfolio"} />
                <ul className="featuredListContainer">
                    {
                        listData.map((listItem) =>
                            <List key={listItem.id} listData={listItem} id={listItem.dataId} active={active} setActive={setActive} />
                        )
                    }
                </ul>

                {/* featuredContainer */}
                <div className="featuredContainer">
                    {/* Featured Box */}
                    {
                        data.map((element) =>
                            <div key={element.id} className={classList ? "fullImg" : "featuredBox"}>
                                <img className="featuredImg" src={element?.img} alt="no img" />
                                <h4>{element?.headline}</h4>
                                <p className="featuredPara">{element?.subHeadline}</p>

                                {/* FeaturedBoxOverlay */}
                                <div className="featureBoxOverlay"></div>
                            </div>
                        )
                    }

                </div>
                <div className="overlay">
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                </div>
            </div>
        </>
    )
}
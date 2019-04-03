import React from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import Tile from "../Tile";
import { Link } from "react-router-dom";


const TilesGrid = ({ tilesInfo = [], gridProps, rowProps = {}, colProps = { size: 4 }, tileProps = {} }) => {
    return (
        <IonGrid {...gridProps}>
            <IonRow {...rowProps}>
                {
                    tilesInfo.map(tileInfo => {
                        return (

                            <IonCol key={tileInfo.imgSrc} {...colProps}>
                                <Link to={tileInfo.url}>
                                    <Tile imgSrc={tileInfo.imgSrc} text={tileInfo.name} {...tileProps} />
                                </Link>
                            </IonCol>);
                    })
                }
            </IonRow>
        </IonGrid>
    );
}

export default TilesGrid;
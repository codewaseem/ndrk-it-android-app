import React, { Component } from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import Tile from "../Tile";



const TilesGrid = ({ tilesInfo = [], gridProps, rowProps = {}, colProps = {}, tileProps = {} }) => {
    return (
        <IonGrid {...gridProps}>
            <IonRow {...rowProps}>
                {
                    tilesInfo.map(tileInfo => {
                        return (
                            <IonCol key={tileInfo.imgSrc} {...colProps}>
                                <Tile imgSrc={tileInfo.imgSrc} text={tileInfo.name} {...tileProps} />
                            </IonCol>);
                    })
                }
            </IonRow>
        </IonGrid>
    );
}

export default TilesGrid;
﻿import * as React from 'react';
import { Actions } from '../../actions/maActions';

// COMPONENTS
import SearchMg from './adData/searchMg';
import TopMiddlePanelMg from './adData/topmiddlepanelmg';
import Spinner from '../default/spinner';

// BOXES OF DATA 
import BoxsdataMgArea from './adData/boxdataMgArea';
import BoxsdataMgTask from './adData/boxdataMgTask';

interface Props {
    dataMg: Array<Tres.DataMgArea
    | Tres.DataMgTask>;
}

export class AdData extends React.Component<Props, any> {

    componentWillMount() {
        Actions.goToMgData("mgDataArea");
    }

    render() {
        function INJECTBOXES(self: AdData) {
            if (Actions._gotoMgDataState_ === "mgDataArea") {
                return self.props.dataMg.map((element: Tres.DataMgArea, key: number) => {
                    return (<BoxsdataMgArea
                        idarea={ element.idarea }
                        name={ element.name }
                        hash= { element.hash }
                        type= { element.type }
                        key={ key }
                        />)
                });
            }
            else if (Actions._gotoMgDataState_ === "mgDataTask") {
                return self.props.dataMg.map((element: Tres.DataMgTask, key: number) => {
                    return (<BoxsdataMgTask
                        idtask={ element.idtask }
                        name={ element.name }
                        hash= { element.hash }
                        type={ element.type }
                        timeta={ element.timeta }

                        key={ key }
                        />)
                });
            }

        }
        return (
            <section className="con_adData" id="adData">
                <div className="row_adData_top">
                    <div className="col_adData_tp_left_min"></div>
                    <div className="col_adData_tp_left">
                        <TopMiddlePanelMg />
                    </div>
                    <div className="col_adData_tp_mid">
                        {/*
                          * SEARCH IN DATA MANAGEMENT
                          */}
                        <SearchMg />

                    </div>
                    <div className="col_adData_tp_right"></div>
                </div>
                <div className="row_adData_mid">
                    <div className="col_adData_md_left">

                    </div>
                    <div className="col_adData_md_mid">
                        <div className="cn_adData_mag">
                            {
                                this.props.dataMg ? INJECTBOXES(this) : <Spinner />
                            }
                        </div>
                    </div>
                    <div className="col_adData_md_right">
                    </div>
                </div>
            </section>
        )
    }
};

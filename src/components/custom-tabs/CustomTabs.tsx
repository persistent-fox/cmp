import {Tab, Tabs} from "@mui/material";
import React, {useState} from "react";
import {ITab} from "../../mock/tabs.ts";
import styles from './CustomTabs.module.scss';
interface ICustomTabsProps {
    tabsList: ITab[]
}

export const CustomTabs = ({tabsList}: ICustomTabsProps) => {
    const [tabIndex, setTabIndex] = useState(0)
    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };
    return (
        <div className={styles.wrapper}>
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                TabIndicatorProps={{
                    className: 'indicator',
                }}
                textColor='inherit'
            >
                {
                    tabsList.map(({id, label}) => (
                        <Tab className={styles.tab} key={id} label={label} />
                    ))
                }
            </Tabs>
        </div>
    )
}
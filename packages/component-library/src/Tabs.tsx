import React from 'react';
import {
  Tabs as ReactAriaTabs,
  TabList as ReactAriaTabList,
  Tab as ReactAriaTab,
  TabPanel as ReactAriaTabPanel,
} from 'react-aria-components';

export type TabProp = {
  header: string;
  id: string;
  panel: any;
};

export type TabsProps = {
  style: any;
  tabs: TabProp[];
};

export const Tabs = ({ style = {}, ...props }: TabsProps) => {
  let headers = [];
  let panels = [];

  for (const tab of props.tabs) {
    headers.push(<ReactAriaTab id={tab.id}>{tab.header}</ReactAriaTab>);

    panels.push(<ReactAriaTabPanel id={tab.id}>{tab.panel}</ReactAriaTabPanel>);
  }

  return (
    <ReactAriaTabs>
      <ReactAriaTabList aria-label="History of Ancient Rome">
        {headers}
      </ReactAriaTabList>
      {panels}
    </ReactAriaTabs>
  );
};

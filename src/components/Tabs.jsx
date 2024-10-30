import { useEffect, useState } from 'react';
import NavItem from './NavItem';
import TabContent from './TabContent';
import ContentService from '../services/content-service';
import useStore from '../store';

const Tabs = () => {
  const [tabActive, setTabActive] = useState('Tab 1');
  const tabs = useStore((state) => state.tabs);
  const setTabs = useStore((state) => state.setTabs);

  const handleClickTab = (item) => {
    if (item.tabTitle === tabActive) {
      return;
    }
    setTabActive(item.tabTitle);
  };
	// I used a different service to fetch the tabs data because https://loripsum.net/ asks for subscription
  useEffect(() => {
    async function fetchData() {
      const { data } = await ContentService.getContent();
      const tabData = data.map((content, index) => ({
        id: index + 1,
        tabTitle: `Tab ${index + 1}`,
        title: `Title ${index + 1}`,
        content,
      }));
      setTabs(tabData);
    }

    try {
      fetchData();
    } catch (err) {
      //handle error
      console.log(err);
    }
  }, []);
  return (
    <div className="container">
      <div className="tabs">
        {tabs?.map((item, index) => (
          <NavItem
            key={index}
            isActive={tabActive === item.tabTitle}
            onClick={() => handleClickTab(item)}
          >
            {item.tabTitle}
          </NavItem>
        ))}
      </div>
      {tabs?.map((item, index) => (
        <TabContent
          key={index}
          title={item.title}
          content={item.content}
          isHidden={!(tabActive === item.tabTitle)}
        />
      ))}
    </div>
  );
};

export default Tabs;

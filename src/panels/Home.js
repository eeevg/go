import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import View from '@vkontakte/vkui/dist/components/View/View';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Counter from '@vkontakte/vkui/dist/components/Counter/Counter';

class Home extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        activeTab1: 'CreateTrip',
      };
    }

    render () {

      return (
        <View activePanel="tabs">
          <Panel id="tabs">
            <PanelHeader>Едем</PanelHeader>
            <FixedLayout vertical="bottom">
              <Tabs theme="light" type="buttons">
                <HorizontalScroll>
                  <TabsItem
                    onClick={() => this.setState({ activeTab1: 'CreateTrip' })}
                    selected={this.state.activeTab1 === 'CreateTrip'}
                  >
                    Создание поездки
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab1: 'search' })}
                    selected={this.state.activeTab1 === 'search'}
                  >
                    Поиск попутчиков
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab1: 'mytrips' })}
                    selected={this.state.activeTab1 === 'mytrips'}
                  >
                    Мои поездки
                  </TabsItem>
                </HorizontalScroll>
              </Tabs>
            </FixedLayout>
          </Panel>
        </View>
				// <View activeTab1="CreateTrip">
				// <Panel id="CreateTrip">
				// 	<PanelHeader>Test</PanelHeader>
				// </Panel>
				// </View>
      )
    }
  }
	// <Home />

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;

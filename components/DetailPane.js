import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tabs, TabsItem, Icon } from 'nr1';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class DetailPane extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    toggleDetailPane: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`container-panel ${this.props.className}`}>
        <div className="header">
          <Button
            size="small"
            type={Button.TYPE.PLAIN}
            onClick={this.props.onClose}
            className="close-button"
            iconType={Button.ICON_TYPE.INTERFACE__SIGN__TIMES__V_ALTERNATE}
          />
          <h3>Detail pane (title here)</h3>
          <a href="#">View in entity explorer</a>
          <span
            className="minimize-button"
            onClick={() => this.props.toggleDetailPane()}
          >
            <Icon
              type={Icon.TYPE.INTERFACE__CHEVRON__CHEVRON_RIGHT__WEIGHT_BOLD}
              color="#000E0E"
              sizeType={Icon.SIZE_TYPE.SMALL}
            />
          </span>
        </div>
        <Tabs>
          <TabsItem value="tab1" label="Tab 1">
            <p>
              Detail panes are a way to provide additional detailed information
              about a specific visualization (tables, chart, map, etc.) on the
              current screen. They are triggered by parts of an interactive
              visualization, which requires additional content to be displayed
              about a specific part of the visualization.
            </p>
            <p>
              When a user has not selected anything from the visualization and
              the detail panel is expanded, display an empty state message with
              instructions for the user to know how to “fill” the content of the
              detail panel.
            </p>
          </TabsItem>
          <TabsItem className="list-tab-item" value="tab2" label="Tab 2">
            <ul className="key-value-pairs fullWidth">
              {Array.from(Array(50).keys()).map(item => {
                return (
                  <li key={item}>
                    <span className="key">key example {item}: </span>
                    <span className="value">value example {item}</span>
                  </li>
                );
              })}
            </ul>
          </TabsItem>
          <TabsItem value="tab3" label="Tab 3">
            <p>
              Dummy content: Nulla quis tortor orci. Etiam at risus et justo
              dignissim.
            </p>

            <p>
              Ut in nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
              Mauris iaculis porttitor posuere. Praesent id metus massa, ut
              blandit odio. Proin quis tortor orci. Etiam at risus et justo
              dignissim congue. Donec congue lacinia dui, a porttitor lectus
              condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio
              ac lectus vestibulum faucibus eget in metus. In pellentesque
              faucibus vestibulum. Nulla at nulla justo, eget luctus tortor.
              Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur
              vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare
              ante, ac egestas est urna sit amet arcu. Class aptent taciti
              sociosqu ad litora torquent per conubia.
            </p>
          </TabsItem>
        </Tabs>
      </div>
    );
  }
}

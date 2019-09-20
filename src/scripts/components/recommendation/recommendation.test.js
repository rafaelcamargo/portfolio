import React from 'react';
import { shallow } from 'enzyme';
import { RAvatar } from '@scripts/components/avatar/avatar';
import { RRecommendation } from '@scripts/components/recommendation/recommendation';

describe('Recommendation', () => {
  function mount(props = {}){
    return shallow(
      <RRecommendation
        personName="Rafael Camargo"
        personImage="camargo.jpg"
        personPosition="Programmer"
        companyImage="company.jpg"
        companyName="Company"
        companyUrl="https://company.com"
        formerCompanyName={ props.formerCompanyName }
        formerCompanyUrl={ props.formerCompanyUrl }>
        { props.content }
      </RRecommendation>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-recommendation');
  });

  it('should contain person avatar', () => {
    const wrapper = mount();
    expect(wrapper.find(RAvatar).at(0).props().image).toEqual('camargo.jpg');
  });

  it('should contain company avatar', () => {
    const wrapper = mount();
    expect(wrapper.find(RAvatar).at(1).props().image).toEqual('company.jpg');
  });

  it('should show person name', () => {
    const wrapper = mount();
    expect(wrapper.find('h3').text()).toEqual('Rafael Camargo');
  });

  it('should show person professional info', () => {
    const wrapper = mount();
    expect(wrapper.find('[data-recommendation-current-company]').text()).toEqual('Programmer at Company');
    expect(wrapper.find('[data-recommendation-current-company] a').props().href).toEqual('https://company.com');
  });

  it('should not include former company in person professional info if no former company has been given', () => {
    const wrapper = mount();
    expect(wrapper.find('[data-recommendation-former-company]').length).toEqual(0);
  });

  it('should include former company in person professional info if former company has been given', () => {
    const formerCompanyName = 'Former Company';
    const formerCompanyUrl = 'https://formercompany.com';
    const wrapper = mount({ formerCompanyName, formerCompanyUrl });
    expect(wrapper.find('[data-recommendation-former-company]').text()).toEqual(`, formerly ${formerCompanyName}`);
    expect(wrapper.find('[data-recommendation-former-company] a').props().href).toEqual(formerCompanyUrl);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text()).toEqual('Hello!');
  });
});

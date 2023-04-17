import React from 'react';
import { shallow } from 'enzyme';
import readsMock from '@scripts/reads/mocks/reads.json';
import readService from '@scripts/reads/services/read/read';
import { ReadList } from '@scripts/reads/components/read-list/read-list';

describe('Read List', () => {
  function mount(){
    return shallow(<ReadList />);
  }

  beforeEach(() => {
    readService.get = jest.fn(() => readsMock);
  });

  it('should group reading by month', () => {
    const wrapper = mount();
    const groups = wrapper.find('[data-read-group]');
    expect(groups).toHaveLength(3)
    expect(groups.at(0).find('h2').text()).toEqual('2022 January');
    expect(groups.at(2).find('h2').text()).toEqual('2021 November');
  });

  it('should list reads for each month', () => {
    const wrapper = mount();
    const groups = wrapper.find('[data-read-group]');
    expect(groups.at(0).find('h3')).toHaveLength(3)
    expect(groups.at(0).find('h3').at(0).text()).toEqual('Out of the Wreckage');
    expect(groups.at(0).find('p').at(0).text()).toEqual('George Monboit');
    expect(groups.at(0).find('h3').at(2).text()).toEqual('As intermitências da morte');
    expect(groups.at(0).find('p').at(2).text()).toEqual('José Saramago');
    expect(groups.at(2).find('h3')).toHaveLength(7)
    expect(groups.at(2).find('h3').at(0).text()).toEqual('How to Live');
    expect(groups.at(2).find('p').at(0).text()).toEqual('Derek Sivers');
    expect(groups.at(2).find('h3').at(5).text()).toEqual('1984');
    expect(groups.at(2).find('p').at(5).text()).toEqual('George Orwell');
    expect(groups.at(2).find('h3').at(6).text()).toEqual('O homem que roubava horas');
    expect(groups.at(2).find('p').at(6).text()).toEqual('Daniel Munduruku');
  });
});

import React from 'react';
import { Input, Button, Icon, Table } from 'antd';

const Search = Input.Search;

const organizations = [
  {
    key: '1',
    name: '1GLOBAL GROUP',
    description: 'toronto',
    url: 'https://glg.themoneytransferapplication.com',
    created: new Date().toJSON().slice(0, 10),
    a: '✏️',
    b: 'deactivate',
  },
  {
    key: '2',
    name: '1stAfrican',
    description: 'FIRST AFRICAN SAVINGS AND LOANS LIMITED',
    url: 'https://glg.themoneytransferapplication.com',
    created: new Date().toJSON().slice(0, 10),
    a: '✏️',
    b: 'deactivate',
  },
  {
    key: '3',
    name: 'A Matos Business',
    description:
      'Customer is running a startup and requires money transfer solution',
    url: 'https://matos.themoneytransferapplication.com',
    created: new Date().toJSON().slice(0, 10),
    deleted: 'yes',
    a: '✏️',
    b: 'activate',
  },
  {
    key: '4',
    name: 'Ayustro india',
    description: 'hiii',
    url: 'https://ayustro.themoneytransferapplication.com',
    created: new Date().toJSON().slice(0, 10),
    a: '✏️',
    b: 'deactivate',
  },
  {
    key: '5',
    name: 'Abacus',
    description: 'Inside Africa test account',
    url: 'https://abacus1.themoneytransferapplication.com',
    created: new Date().toJSON().slice(0, 10),
    a: '✏️',
    b: 'activate',
  },
];

class OrganizationTable extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Company name',
        dataIndex: 'name',
        key: 'name',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        sorter: (a, b) => a.description.length - b.description.length,
        sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
      },
      {
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        render: text => <a href={text}>{text}</a>,
      },
      {
        title: 'Created on',
        dataIndex: 'created',
        key: 'created',
      },
      {
        title: 'Edit',
        dataIndex: 'a',
        key: 'a',
      },
      {
        title: 'Action',
        dataIndex: 'b',
        key: 'b',
        render: text => (
          <a
            className={text === 'activate' ? 'active' : 'inactive'}
            href={text}
          >
            {text}
          </a>
        ),
      },
    ];
    return (
      <div>
        <div className="table-operations">
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            color="red"
            style={{ width: 400 }}
            onSearch={value => console.log(value)}
          />{' '}
          <Button className="create" size="large" type="primary">
            <Icon type="plus" />
            Create
          </Button>
        </div>
        <Table
          onRow={(r, i) => console.log('r', r, 'i', i, 'this', this)}
          rowClassName={(r, i) => {
            return i % 2 === 0 ? 'odd-row' : '';
          }}
          columns={columns}
          dataSource={organizations}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default OrganizationTable;

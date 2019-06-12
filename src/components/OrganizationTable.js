import React from 'react';
import { Input, Button, Icon, Table } from 'antd';
import { connect } from 'react-redux';
import { fetchOrganizations } from '../actions/organization.action';

const Search = Input.Search;

const organizations = [
  {
    key: '1',
    companyName: '1GLOBAL GROUP',
    description: 'toronto',
    url: 'https://glg.themoneytransferapplication.com',
    created: new Date().toJSON().slice(0, 10),
    a: '✏️',
    b: 'deactivate',
    active: true,
  },
  {
    key: '2',
    companyName: '1stAfrican',
    description: 'FIRST AFRICAN SAVINGS AND LOANS LIMITED',
    url: 'https://glg.themoneytransferapplication.com',
    created: new Date().toJSON().slice(0, 10),
    a: '✏️',
    b: 'deactivate',
    active: false,
  },
  {
    key: '3',
    companyName: 'A Matos Business',
    description:
      'Customer is running a startup and requires money transfer solution',
    url: 'https://matos.themoneytransferapplication.com',
    created: new Date().toJSON().slice(0, 10),
    deleted: 'yes',
    a: '✏️',
    b: 'activate',
    active: true,
  },
  {
    key: '4',
    companyName: 'Ayustro india',
    description: 'hiii',
    url: 'https://ayustro.themoneytransferapplication.com',
    created: new Date().toJSON().slice(0, 10),
    a: '✏️',
    b: 'deactivate',
    active: false,
  },
  {
    key: '5',
    companyName: 'Abacus',
    description: 'Inside Africa test account',
    url: 'https://abacus1.themoneytransferapplication.com',
    created: new Date().toJSON().slice(0, 10),
    a: '✏️',
    b: 'activate',
    active: true,
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

  componentDidMount() {
    this.props.getOrganizations();
  }

  render() {
    console.table(this.props.organizationsList);
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Company name',
        dataIndex: 'companyName',
        key: 'companyName',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.companyName || null,
        onFilter: (value, record) => record.companyName.includes(value),
        sorter: (a, b) => a.companyName.length - b.companyName.length,
        sortOrder: sortedInfo.columnKey === 'companyName' && sortedInfo.order,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        sorter: (a, b) => a.description.length - b.description.length,
        sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
      },
      {
        title: 'Domain Name',
        dataIndex: 'domainName',
        key: 'domainName',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        render: text => <a href={`http://${text}`}>{text}</a>,
      },
      {
        title: 'Edit',
        dataIndex: '',
        key: 'edit',
        render: () => <a href="#">✏️</a>,
      },
      {
        title: 'Action',
        dataIndex: 'active',
        key: 'active',
        render: (text, record) => (
          <a
            className={text ? 'inactive' : 'active'}
            href="#"
            onClick={e => console.log(e, record)}
          >
            {text ? 'deactivate' : 'activate'}
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
        {/* onRow={(r, i) => console.log('r', r, 'i', i, 'this', this)} */}
        <Table
          rowClassName={(r, i) => {
            return i % 2 === 0 ? 'odd-row' : '';
          }}
          columns={columns}
          dataSource={this.props.organizationsList}
          onChange={this.handleChange}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ organizations }) => ({
  organizationsList: organizations.organizationsList,
  loading: organizations.loading,
});

const mapDispatchToProps = dispatch => ({
  getOrganizations: () => dispatch(fetchOrganizations()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationTable);

import React from 'react';
import { Input, Button, Icon, Table } from 'antd';

const Search = Input.Search;

class ViewUsersTable extends React.Component {
  state = {
    dataSource: [],
    loading: false,
  };

  handleSearch = value => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        dataSource: [
          {
            key: '1',
            last_login: '2019/11/02 11:00AM',
            company_name: 'Gekko',
            customer_name: 'Mike',
            status: 'Confirmed',
            action: `Reset Password | ${
              true ? 'suspend User' : 'Activate User'
            }`,
          },
        ],
        loading: false,
      });
    }, 5000);
  };

  handleActionClick = (event, value) => {
    console.log(event.target, value);
  };

  render() {
    const columns = [
      {
        title: 'Last Login',
        dataIndex: 'last_login',
        key: 'last_login',
      },
      {
        title: 'Company Name',
        dataIndex: 'company_name',
        key: 'company_name',
      },
      {
        title: 'Customer',
        dataIndex: 'customer_name',
        key: 'customer_name',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: text => (
          <span className={text === 'Confirmed' ? 'active' : 'inactive'}>
            {text}
          </span>
        ),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: text => (
          <a onClick={event => this.handleActionClick(event, 'sds')}>{text}</a>
        ),
      },
    ];

    return (
      <>
        <Search
          placeholder="Enter email"
          enterButton="Search"
          size="large"
          onSearch={this.handleSearch}
          style={{ width: '40%' }}
        />
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
          loading={this.state.loading}
        />
      </>
    );
  }
}

export default ViewUsersTable;

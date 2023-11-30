import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import SearchFilterBar from './SearchFilterBar';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'industryInterest', headerName: 'Industry', width: 200 },
  {
    field: 'location',
    headerName: 'Location',
    // type: 'number',
    width: 200,
  },
  {
    field: 'description',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 500,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.description}`,
  },
];

export default function DataTable() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <SearchFilterBar/>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}


const rows = [
  {
    id: 1,
    name: 'Investor One',
    industryInterest: ['Technology', 'Healthcare'],
    location: 'San Francisco, CA',
    description: 'This is a description for Investor One who is interested in technology and healthcare sectors.',
  },
  {
    id: 2,
    name: 'Investor Two',
    industryInterest: ['Finance', 'Real Estate'],
    location: 'New York, NY',
    description: 'This is a description for Investor Two who is interested in finance and real estate sectors.',
  },
  {
    id: 3,
    name: 'Investor Three',
    industryInterest: ['Entertainment', 'Fashion'],
    location: 'Los Angeles, CA',
    description: 'This is a description for Investor Three who is interested in entertainment and fashion sectors.',
  },
  {
    id: 4,
    name: 'Investor Four',
    industryInterest: ['Automotive', 'Telecommunications'],
    location: 'Detroit, MI',
    description: 'This is a description for Investor Four who is interested in automotive and telecommunications sectors.',
  },
  {
    id: 5,
    name: 'Investor Five',
    industryInterest: ['Food & Beverage', 'Agriculture'],
    location: 'Chicago, IL',
    description: 'This is a description for Investor Five who is interested in food & beverage and agriculture sectors.',
  },
  {
    id: 6,
    name: 'Investor Six',
    industryInterest: ['Education', 'Travel & Tourism'],
    location: 'Boston, MA',
    description: 'This is a description for Investor Six who is interested in education and travel & tourism sectors.',
  },
  {
    id: 7,
    name: 'Investor Seven',
    industryInterest: ['Biotechnology', 'Energy'],
    location: 'San Diego, CA',
    description: 'This is a description for Investor Seven who is interested in biotechnology and energy sectors.',
  },
  {
    id: 8,
    name: 'Investor Eight',
    industryInterest: ['Retail', 'E-commerce'],
    location: 'Seattle, WA',
    description: 'This is a description for Investor Eight who is interested in retail and e-commerce sectors.',
  },
  {
    id: 9,
    name: 'Investor Nine',
    industryInterest: ['Artificial Intelligence', 'Robotics'],
    location: 'Austin, TX',
    description: 'This is a description for Investor Nine who is interested in AI and robotics sectors.',
  },
  {
    id: 10,
    name: 'Investor Ten',
    industryInterest: ['Healthtech', 'Blockchain'],
    location: 'Miami, FL',
    description: 'This is a description for Investor Ten who is interested in healthtech and blockchain sectors.',
  },
  {
    id: 11,
    name: 'Investor Eleven',
    industryInterest: ['CleanTech', 'Sustainability'],
    location: 'Portland, OR',
    description: 'This is a description for Investor Eleven who is interested in cleantech and sustainability sectors.',
  },
  {
    id: 12,
    name: 'Investor Twelve',
    industryInterest: ['Space Exploration', 'Aerospace'],
    location: 'Houston, TX',
    description: 'This is a description for Investor Twelve who is interested in space exploration and aerospace sectors.',
  },
  {
    id: 13,
    name: 'Investor Thirteen',
    industryInterest: ['Gaming', 'VR/AR'],
    location: 'Las Vegas, NV',
    description: 'This is a description for Investor Thirteen who is interested in gaming and VR/AR sectors.',
  },
  {
    id: 14,
    name: 'Investor Fourteen',
    industryInterest: ['Logistics', 'Supply Chain'],
    location: 'Dallas, TX',
    description: 'This is a description for Investor Fourteen who is interested in logistics and supply chain sectors.',
  },
  {
    id: 15,
    name: 'Investor Fifteen',
    industryInterest: ['Renewable Energy', 'GreenTech'],
    location: 'Denver, CO',
    description: 'This is a description for Investor Fifteen who is interested in renewable energy and greentech sectors.',
  },
];



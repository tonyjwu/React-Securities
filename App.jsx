import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Nav, NavItem, Form, FormControl, FormGroup, Table, Button, ButtonGroup, Pagination} from 'react-bootstrap';



class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         securities: 
         []
      }
    }
    //get json data using axios
 	componentDidMount() {
	    axios.get(`https://gist.githubusercontent.com/apotapov/8c438bce39116e884892363b8cfcaad0/raw/4887020610f74b96810d3835f30679871e72261f/secondary-levels.json`)
	      .then(res => {
	        const securities = res.data.secondaryLevels;
	        this.setState({securities});
	    });
  	}

   render() {

	const appStyle = {
		'marginTop': '50px',
		'marginBottom': '50px',
		'marginRight': '30px',
		'marginLeft': '50px'
	};

    return (
         <div className ='app' style={appStyle}>
            <Header1/>  
            <Tabs/>
     		<InlineElements/>
     		<SecuritiesTable data = {this.state.securities}/>
         	<PaginationButtons/>
         </div>
      );
    }
}

class SecuritiesTable extends React.Component {
   render() {
		const tableStyle = {
   	  	    'marginTop': '5px',
   	  	    'marginRight': '50px'
   	  	}
		return (
			<div className ='table' style ={tableStyle}>
				<Table striped condensed>
				   <TableHeader/>
				<tbody>
				  {this.props.data.map((security, i) => <TableRow key = {i} index = {i} info = {security} length = {this.props.data.length} />)}
				</tbody>
				</Table>
			</div>
		);
    }
}

class Header1 extends React.Component {
   render() {
		return (
			<div>
				<h1>Market</h1>
			</div>
		);
    }
}

class Tabs extends React.Component {

	render() {

		const tabsStyle = {
			'marginTop': '15px',
			'marginBottom': '15px',
		}
		return (
			<div className='Tabs' style={tabsStyle}>
				<Nav bsStyle="tabs" activeKey="1">
					<NavItem  eventKey="1">Secondary Levels</NavItem>
					<NavItem  eventKey="2">New Issue Pricing Benchmarks - CAD</NavItem>
					<NavItem  eventKey="3">New Issue Pricing Benchmarks - USD</NavItem>
					<NavItem  eventKey="4">Swap Rates - CAD</NavItem>
					<NavItem  eventKey="5">Swap Rates - CAD</NavItem>
				</Nav>
			</div>
		);
	}
}

class InlineElements extends React.Component {
    render() {
        return (
      	  	<div className = 'InlineElements' style = {{display:'inline-block', 'marginTop' : '20px', 'width': '100%'}}>
      	  	    <h3 style={{display: 'inline'}}>Secondary Levels</h3>
			        <div className = 'inputBox' style= {{display:'inline-block', 'float': 'none', 'width': '500px', 'marginLeft': 'auto', 'marginRight': 'auto'}/*setting marginLeft and marginRight does not center div somehow :(*/}>
				        <form>
				        	<FormGroup controlId="formBasicText">
					          	<FormControl
					            type="text"
					            placeholder="Select Issuer"
					          />
				        	</FormGroup>
				      </form>
				    </div>
		            <div className = 'FilterButton' style = {{display:'inline-block', 'marginLeft': '10px', 'width': '200x'}}>
			      		<Button type="submit">
		      				Filter
		    		    </Button>
	    		  	</div>
			      	<div className = 'UploadDownloadButtons' style = {{display:'inline-block', 'float' : 'right'}}>
			        	<ButtonGroup>
							<Button><i style = {{'marginRight': '10px'}}className="fa fa-upload" aria-hidden="true"></i>Upload</Button>
							<Button><i style = {{'marginRight': '10px'}}className="fa fa-download" aria-hidden="true"></i>Download</Button>
						</ButtonGroup>
				</div>
		    </div>
        );
    }
}

class TableHeader extends React.Component {
	render() {
		const blueColour = '#577fbf';
		
		const boderStyleNone = {
		'borderStyle':'none'
		}

		const textAlignCenter = {
			'textAlign':'center',
			'borderStyle':'none'
		}

		return (
		<thead>
			<tr style = {boderStyleNone}>
				<th style = {boderStyleNone}></th>
				<th style = {boderStyleNone}></th>
				<th style = {boderStyleNone}></th>
				<th style = {boderStyleNone}></th>
				<th style = {boderStyleNone}></th>
				<th colSpan = "4" style = {{textAlign:'center', 'borderStyle':'none', 'borderBottom':'2pt solid black'}}>Spread Vs.</th>
			</tr>
			<tr style = {{ 'borderCollapse': 'separate', 'borderSpacing': '5px 5px', 'borderBottom':'1.5pt solid black'}}>
				<th style = {boderStyleNone}><font color={blueColour}>Issuer</font><i style = {{'marginLeft': '5px', 'color': blueColour}} className="fa fa-chevron-down" aria-hidden="true"></i> </th>
				<th style = {boderStyleNone}><font color={blueColour}>Issue Description</font></th>
				<th style = {boderStyleNone}><font color={blueColour}>Currency</font></th>
				<th style = {textAlignCenter}><font color={blueColour}>Years Remaining</font></th>
				<th style = {boderStyleNone}><font color={blueColour}>Benchmark</font></th>
				<th style = {textAlignCenter}><font color={blueColour}>Benchmark</font></th>
				<th style = {textAlignCenter}><font color={blueColour}>GoC Curve</font></th>
				<th style = {textAlignCenter}><font color={blueColour}>3M CDOR</font></th>
				<th style = {textAlignCenter}><font color={blueColour}>3M USDL</font></th>
				<th style = {boderStyleNone}><font color={blueColour}>Updated</font></th>
			</tr>
		</thead>
		);
	}
}

class TableRow extends React.Component {
	render() {
		const blueColour = '#577fbf';

		const textAlignCenter = {
		'textAlign':'center'
		}

		var rowStyle = {};

		if (this.props.index === this.props.length-1) {
			rowStyle = {
			'borderBottom':'2pt solid black'
			}
		}


		return (
			<tr style = {rowStyle}>
				<td><font color={blueColour}>{this.props.info.securityName}</font></td>
				<td>{this.props.info.description}</td>
				<td>{this.props.info.currency}</td>
				<td style = {textAlignCenter}>{this.props.info.yearsRemaining}</td>
				<td>{this.props.info.benchmarkSecurityDescription}</td>
				<td style = {textAlignCenter}>{this.props.info.bidSpreadVsBenchmark}</td>
				<td style = {textAlignCenter}>{this.props.info.bidSpreadVsGocCurve}</td>
				<td style = {textAlignCenter}>{this.props.info.bidSpreadVs3mCdor}</td>
				<td style = {textAlignCenter}>{this.props.info.bidSpreadVs3mUsdl}</td>
				<td>{this.props.info.readableTimestamp}<i style = {{'marginLeft': '40px'}} className="fa fa-bar-chart" aria-hidden="true"></i></td>
			</tr>
		);
	}
}


class PaginationButtons extends React.Component {
    render() {

		const paginationStyle = {
			marginTop : '10px',
			float : 'none',
			marginLeft : 'auto', //setting marginLeft and marginRight does not center div somehow :(
			marginRight : 'auto',
		}

		return (
			<div className="pagination" style={paginationStyle}>
				<Pagination
				prev
				next
				first
				last
				ellipsis
				boundaryLinks
				items={10}
				maxButtons={6}
				/>
			</div>
		)
    }
}

export default App;



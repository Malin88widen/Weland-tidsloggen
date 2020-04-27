// import React, { Component } from "react";

// class homePage extends Component {
//   render() {
//     return (
//       <div className="homePageWelands">
//         <h1>Hello World!</h1>
//       </div>
//     );
//   }
// }

// export default homePage;


// import React, { Component } from "react";

// class Counter extends Component {
//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={() => this.props.onIncrement(this.props.counter)}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>
//         <button
//           onClick={() => this.props.onDelete(this.props.counter.id)}
//           className="btn btn-danger btn-sm m-2"
//         >
//           Delete
//         </button>
//       </div>
//     );
//   }
//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.props.counter === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { value: count } = this.props.counter;
//     return count === 0 ? "Zero" : count;
//   }
// }

// export default Counter;

import moment from 'moment'

export default  [{
  id:'01',
  description:'Pen',
  note:'to take a note',
  amount:100,
  createdDate:0
},
  {
    id:'02',
    description:'Notebook',
    note:'to write notes on ',
    amount:1000,
    createdDate:moment(0).subtract(4,'days').valueOf()
  },
  {
    id:'03',
    description:'House',
    note:'We live here',
    amount:500,
    createdDate:moment(0).add(4,'days').valueOf()
  }
]

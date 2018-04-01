'use strict'

const element = document.getElementById('chart')
const data = [{
  label: 'Education',
  data: [{
    label: 'B.A. Degree, Franklin College',
    type: TimelineChart.TYPE.INTERVAL,
    from: new Date([2009, 8, 15]),
    to: new Date([2013, 5, 15]),
    title: 'Major: Pure Mathematics, Applied Mathematics, Quantitative Analysis, Economics <br> Minor: Political Science <br> Thesis: "Determinants of College Success: What Determines Undergraduate Grade Point Average?"'
  }, {
    label: 'M.S. Degree, The Ohio State University',
    type: TimelineChart.TYPE.INTERVAL,
    from: new Date([2013, 8, 15]),
    to: new Date([2015, 5, 15]),
    title: 'Major: Statistics <br> Thesis: "The Rare Disease Assumption: The Good, the Bad, and the Ugly"'
  }]
},
{
  label: 'Professional',
  data: [{
    label: 'The Ohio State University',
    type: TimelineChart.TYPE.INTERVAL,
    from: new Date([2013, 8, 15]),
    to: new Date([2014, 5, 10]),
    title: 'Graduate Teaching Associate'
  },
  {
    label: 'The J.M. Smucker Company',
    type: TimelineChart.TYPE.INTERVAL,
    from: new Date([2014, 5, 20]),
    to: new Date([2014, 8, 10]),
    title: 'Enterprise Analytics Intern'
  },
  {
    label: 'The Ohio State University',
    type: TimelineChart.TYPE.INTERVAL,
    from: new Date([2014, 8, 20]),
    to: new Date([2015, 5, 15]),
    title: 'Graduate Teaching Associate'
  },
  {
    label: '0ptimus Consulting',
    type: TimelineChart.TYPE.INTERVAL,
    from: new Date([2015, 6, 8]),
    to: new Date([2016, 11, 6]),
    title: 'Junior Data Scientist / Data Science Fellow'
  }, {
    label: 'General Assembly',
    type: TimelineChart.TYPE.INTERVAL,
    from: new Date([2016, 10, 31]),
    to: new Date(),
    title: 'Global Lead Data Science Instructor / Lead Data Science Instructor'
  }]
},
{
  label: 'Talks and Panels',
  data: [{
    title: 'Title: "From Peanut Butter to Politics: The Role of Analytics in Decision-Making" <br> Event: Big Data Analytics Association Meeting <br> Role: Sole Presenter',
    type: TimelineChart.TYPE.POINT,
    at: new Date([2015, 3, 30])
  },
  {
    title: 'Title: "Data-Driven Insights: How Data is Reshaping Your Industry" <br> Event: Data-Driven Insights: How Data is Reshaping Your Industry Conference, The George Washington University <br> Role: Co-presenter',
    type: TimelineChart.TYPE.POINT,
    at: new Date([2015, 12, 15])
  },
  {
    title: 'Title: "How to Get Out The Vote with Digital" <br> Event: Conservative Political Action Conference, 0ptimus Consulting <br> Role: Sole Presenter (standing in)',
    type: TimelineChart.TYPE.POINT,
    at: new Date([2016, 3, 15])
  },
  {
    title: 'Title: "Introduction to the DC Tech Community" <br> Event: Panel, General Assembly <br> Role: Panelist',
    type: TimelineChart.TYPE.POINT,
    at: new Date([2016, 8, 15])
  },
  {
    title: 'Title: "The Lab @ D.C. - Talk Data to Me" <br> Event: Panel, General Assembly <br> Role: Moderator',
    type: TimelineChart.TYPE.POINT,
    at: new Date([2017, 8, 15])
  },
  {
    title: 'Title: "Deloitte Insight Studio - Talk Data to Me" <br> Event: Panel, General Assembly <br> Role: Moderator',
    type: TimelineChart.TYPE.POINT,
    at: new Date([2018, 2, 1])
  },
  {
    title: 'Title: "D.C. Data Scientists - Talk Data to Me" <br> Event: Panel, General Assembly <br> Role: Moderator',
    type: TimelineChart.TYPE.POINT,
    at: new Date([2018, 2, 15])
  },
  {
    title: 'Title: "Mapbox - Talk Data to Me" <br> Event: Panel, General Assembly <br> Role: Moderator',
    type: TimelineChart.TYPE.POINT,
    at: new Date([2018, 3, 20])
  },
  {
    title: 'Title: "Help! I have missing data. How do I fix it (the right way)?" <br> Event: Open Data Science Conference East, Boston, MA <br> Role: Sole Presenter',
    type: TimelineChart.TYPE.POINT,
    at: new Date([2018, 5, 2])
  },
  {
    title: 'Title: "I have missing data.... how do I handle it (the right way)?" <br> Event: JupyterCon 2018, New York City, NY <br> Role: Sole Presenter',
    type: TimelineChart.TYPE.POINT,
    at: new Date([2018, 8, 23])
  }]
}]

const timeline = new TimelineChart(element, data, {
  enableLiveTimer: true,
  intervalMinWidth: 1,
  tip: function (d) {
    return d.title && d.title
    // return d.at || `${d.from}<br>${d.to}`
  }
}).onVizChange(e => console.log(e))
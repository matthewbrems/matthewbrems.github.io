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
        label: 'Grand Valley State University',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2012, 5, 20]),
        to: new Date([2012, 8, 10]),
        title: 'Employer: Grand Valley State University <br> Title: Undergraduate Researcher'
    },
    {
        label: 'The Ohio State University',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2013, 8, 15]),
        to: new Date([2014, 5, 10]),
        title: 'Employer: The Ohio State University <br> Titles: Interim Course Coordinator / Graduate Teaching Associate'
    },
    {
        label: 'The J. M. Smucker Company',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2014, 5, 20]),
        to: new Date([2014, 8, 10]),
        title: 'Employer: The J. M. Smucker Company <br> Title: Enterprise Analytics Intern'
    },
    {
        label: 'The Ohio State University',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2014, 8, 20]),
        to: new Date([2015, 5, 15]),
        title: 'Employer: The Ohio State University <br> Titles: Lecturer / Graduate Teaching Associate'
    },
    {
        label: '0ptimus Consulting',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2015, 6, 8]),
        to: new Date([2016, 11, 6]),
        title: 'Employer: 0ptimus Consulting <br> Titles: Junior Data Scientist / Data Science Fellow'
    }, {
        label: 'General Assembly',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2016, 11, 10]),
        to: new Date(),
        title: 'Employer: General Assembly <br> Titles: Global Lead Data Science Instructor / Lead Data Science Instructor'
    }]
},
{
    label: 'Presentations',
    data: [{
        title: 'Title: "How Quickly Can We Break Codes? The Rail-Fence Cipher" <br> Event: Pi Mu Epsilon Undergraduate Student Conference, Miami University, Oxford, OH <br> Role: Co-Presenter',
        type: TimelineChart.TYPE.POINT,
        at: new Date([2010, 9, 20])
        },
        {
        title: 'Title: "Saving Money & Going Green: How Statistics Changes the Bottom Line" <br> Event: o   Undergraduate Mathematics & Computing Colloquium Series, Franklin College, Franklin, IN <br> Role: Sole Presenter',
        type: TimelineChart.TYPE.POINT,
        at: new Date([2012, 4, 15])
        },
        {
        title: 'Title: "Equal Circle Packing on the Flat Klein Bottle" <br> Event: Mathematical Association of America\'s 2012 MathFest, Madison, WI <br> Role: Co-Presenter',
        type: TimelineChart.TYPE.POINT,
        at: new Date([2012, 8, 1])
        },
        {
        title: 'Title: "Equal Circle Packing on the Flat Klein Bottle" <br> Event: Pi Mu Epsilon Student Conference, Miami University, Oxford, OH <br> Role: Sole Presenter',
        type: TimelineChart.TYPE.POINT,
        at: new Date([2012, 9, 20])
        },
        {
        title: 'Title: "From Peanut Butter to Politics: The Role of Analytics in Decision-Making" <br> Event: Big Data Analytics Association Meeting <br> Role: Sole Presenter',
        type: TimelineChart.TYPE.POINT,
        at: new Date([2015, 3, 30])
        },
        {
        title: 'Title: "Not “Politics as Usual” - How Data Science Revolutionizes The World of Politics" <br> Event: Data-Driven Insights: How Data is Reshaping Your Industry Conference, The George Washington University <br> Role: Co-Presenter',
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
        title: 'Title: "Big Data Q & A" <br> Event: Franklin College LA 112 Course <br> Role: Sole Presenter',
        type: TimelineChart.TYPE.POINT,
        at: new Date([2018, 4, 16])
        },
        {
        title: 'Title: "Help! I have missing data. How do I fix it (the right way)?" <br> Event: Open Data Science Conference East, Boston, MA <br> Role: Sole Presenter',
        type: TimelineChart.TYPE.POINT,
        at: new Date([2018, 5, 2])
        },
        {
        title: 'Title: "Advanced Data Science, Part 2: Handle missing data in 5 ways in Jupyter notebooks." <br> Event: JupyterCon 2018, New York City, NY <br> Role: Sole Presenter',
        type: TimelineChart.TYPE.POINT,
        at: new Date([2018, 8, 23])
        }]
}];


const timeline = new TimelineChart(element, data, {
  enableLiveTimer: true,
  intervalMinWidth: 1,
  tip: function (d) {
    return d.title && d.title
    // return d.at || `${d.from}<br>${d.to}`
  }
}).onVizChange(e => console.log(e))

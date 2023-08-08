const schedule = require("node-schedule");
const B1 = require("../Models/3.BlogPosts");


async function MakeViewsCorrect () {

var j = schedule.scheduleJob("0 0 0 * * *", async function () {

    const B2  = await B1.find();

    for (qq of B2) {
       const v  = qq.views;
       const idd = qq._id;

          const NvE = math.round(v / 2);

          const B3 = await B1.findByIdAndUpdate({
            _id: idd,
          },{
            views: NvE,
          },{
            upsert: true,
          });
       }
});


}
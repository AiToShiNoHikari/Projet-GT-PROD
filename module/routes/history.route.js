const i=require("express"),t=require("../database/index.model");let o=i.Router();o.get("/",(function(i,o){t.History.findAll().then(i=>{i=i.map(i=>({idHistory:i.idHistory,historyModif:i.historyModif,historyDescription:i.historyDescription,historyState:i.historyState})),o.json(i)})})),o.get("/:idHistory",(function(i,o){t.History.findOne({where:{idHistory:i.params.idHistory}}).then(i=>{o.json({idHistory:i.idHistory,historyModif:i.historyModif,historyDescription:i.historyDescription,historyState:i.historyState})})})),o.post("/",(function(i,o){t.History.create(i.body).then(i=>{o.json({idHistory:i.idHistory,historyModif:i.historyModif,historyDescription:i.historyDescription,historyState:i.historyState})})})),o.put("/:idHistory",(function(i,o){t.History.update({where:{idHistory:i.params.idHistory}}).then(i=>{o.json({idHistory:i.idHistory,historyModif:i.historyModif,historyDescription:i.historyDescription,historyState:i.historyState})})})),o.delete("/:idHistory",(function(i,o){t.History.destroy({where:{idHistory:i.params.idHistory}}).then(i=>{o.json({result:"success"})})})),module.exports=o;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9yb3V0ZXMvaGlzdG9yeS5yb3V0ZS5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImRiIiwibG9Sb3V0ZXIiLCJSb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJIaXN0b3J5IiwiZmluZEFsbCIsInRoZW4iLCJoaXN0b3J5cyIsIm1hcCIsImhpc3RvcnkiLCJpZEhpc3RvcnkiLCJoaXN0b3J5TW9kaWYiLCJoaXN0b3J5RGVzY3JpcHRpb24iLCJoaXN0b3J5U3RhdGUiLCJqc29uIiwiZmluZE9uZSIsIndoZXJlIiwicGFyYW1zIiwicG9zdCIsImNyZWF0ZSIsImJvZHkiLCJwdXQiLCJ1cGRhdGUiLCJkZWxldGUiLCJkZXN0cm95IiwicmVzdWx0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsRUFBVUMsUUFBUSxXQUNsQkMsRUFBS0QsUUFBUSwyQkFFbkIsSUFBSUUsRUFBV0gsRUFBUUksU0FFdkJELEVBQVNFLElBQUksS0FBSyxTQUFTQyxFQUFLQyxHQUM5QkwsRUFBR00sUUFBUUMsVUFBVUMsS0FBTUMsSUFDekJBLEVBQVdBLEVBQVNDLElBQUlDLElBQ2YsQ0FDTEMsVUFBV0QsRUFBUUMsVUFDbkJDLGFBQWNGLEVBQVFFLGFBQ3RCQyxtQkFBb0JILEVBQVFHLG1CQUM1QkMsYUFBY0osRUFBUUksZ0JBRzFCVixFQUFJVyxLQUFLUCxRQUliUixFQUFTRSxJQUFJLGVBQWUsU0FBU0MsRUFBS0MsR0FDeENMLEVBQUdNLFFBQVFXLFFBQVEsQ0FDakJDLE1BQU8sQ0FDTE4sVUFBV1IsRUFBSWUsT0FBT1AsYUFFdkJKLEtBQU1HLElBQ1BOLEVBQUlXLEtBQUssQ0FDUEosVUFBV0QsRUFBUUMsVUFDbkJDLGFBQWNGLEVBQVFFLGFBQ3RCQyxtQkFBb0JILEVBQVFHLG1CQUM1QkMsYUFBY0osRUFBUUksb0JBSzVCZCxFQUFTbUIsS0FBSyxLQUFLLFNBQVNoQixFQUFLQyxHQUMvQkwsRUFBR00sUUFBUWUsT0FBT2pCLEVBQUlrQixNQUNuQmQsS0FBTUcsSUFDTE4sRUFBSVcsS0FBSyxDQUNQSixVQUFXRCxFQUFRQyxVQUNuQkMsYUFBY0YsRUFBUUUsYUFDdEJDLG1CQUFvQkgsRUFBUUcsbUJBQzVCQyxhQUFjSixFQUFRSSxvQkFLOUJkLEVBQVNzQixJQUFJLGVBQWUsU0FBU25CLEVBQUtDLEdBQ3hDTCxFQUFHTSxRQUFRa0IsT0FBTyxDQUNkTixNQUFPLENBQ0xOLFVBQVdSLEVBQUllLE9BQU9QLGFBR3pCSixLQUFNRyxJQUNMTixFQUFJVyxLQUFLLENBQ1BKLFVBQVdELEVBQVFDLFVBQ25CQyxhQUFjRixFQUFRRSxhQUN0QkMsbUJBQW9CSCxFQUFRRyxtQkFDNUJDLGFBQWNKLEVBQVFJLG9CQUs5QmQsRUFBU3dCLE9BQU8sZUFBZSxTQUFTckIsRUFBS0MsR0FDM0NMLEVBQUdNLFFBQVFvQixRQUFRLENBQ2ZSLE1BQU8sQ0FDTE4sVUFBV1IsRUFBSWUsT0FBT1AsYUFHekJKLEtBQU1HLElBQ0xOLEVBQUlXLEtBQUssQ0FDUFcsT0FBUSxpQkFLaEJDLE9BQU9DLFFBQVU1QiIsImZpbGUiOiJtb2R1bGUvcm91dGVzL2hpc3Rvcnkucm91dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgZGIgPSByZXF1aXJlKCcuLi9kYXRhYmFzZS9pbmRleC5tb2RlbCcpO1xuXG5sZXQgbG9Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5sb1JvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICBkYi5IaXN0b3J5LmZpbmRBbGwoKS50aGVuKChoaXN0b3J5cykgPT4ge1xuICAgIGhpc3RvcnlzID0gaGlzdG9yeXMubWFwKGhpc3RvcnkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWRIaXN0b3J5OiBoaXN0b3J5LmlkSGlzdG9yeSxcbiAgICAgICAgaGlzdG9yeU1vZGlmOiBoaXN0b3J5Lmhpc3RvcnlNb2RpZixcbiAgICAgICAgaGlzdG9yeURlc2NyaXB0aW9uOiBoaXN0b3J5Lmhpc3RvcnlEZXNjcmlwdGlvbixcbiAgICAgICAgaGlzdG9yeVN0YXRlOiBoaXN0b3J5Lmhpc3RvcnlTdGF0ZVxuICAgICAgfVxuICAgIH0pXG4gICAgcmVzLmpzb24oaGlzdG9yeXMpO1xuICB9KTtcbn0pO1xuXG5sb1JvdXRlci5nZXQoJy86aWRIaXN0b3J5JywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgZGIuSGlzdG9yeS5maW5kT25lKHtcbiAgICB3aGVyZToge1xuICAgICAgaWRIaXN0b3J5OiByZXEucGFyYW1zLmlkSGlzdG9yeVxuICAgIH1cbiAgfSkudGhlbigoaGlzdG9yeSkgPT4ge1xuICAgIHJlcy5qc29uKHtcbiAgICAgIGlkSGlzdG9yeTogaGlzdG9yeS5pZEhpc3RvcnksXG4gICAgICBoaXN0b3J5TW9kaWY6IGhpc3RvcnkuaGlzdG9yeU1vZGlmLFxuICAgICAgaGlzdG9yeURlc2NyaXB0aW9uOiBoaXN0b3J5Lmhpc3RvcnlEZXNjcmlwdGlvbixcbiAgICAgIGhpc3RvcnlTdGF0ZTogaGlzdG9yeS5oaXN0b3J5U3RhdGVcbiAgICB9KTtcbiAgfSk7XG59KTtcblxubG9Sb3V0ZXIucG9zdCgnLycsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGRiLkhpc3RvcnkuY3JlYXRlKHJlcS5ib2R5KVxuICAgIC50aGVuKChoaXN0b3J5KSA9PiB7XG4gICAgICByZXMuanNvbih7XG4gICAgICAgIGlkSGlzdG9yeTogaGlzdG9yeS5pZEhpc3RvcnksXG4gICAgICAgIGhpc3RvcnlNb2RpZjogaGlzdG9yeS5oaXN0b3J5TW9kaWYsXG4gICAgICAgIGhpc3RvcnlEZXNjcmlwdGlvbjogaGlzdG9yeS5oaXN0b3J5RGVzY3JpcHRpb24sXG4gICAgICAgIGhpc3RvcnlTdGF0ZTogaGlzdG9yeS5oaXN0b3J5U3RhdGVcbiAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbmxvUm91dGVyLnB1dCgnLzppZEhpc3RvcnknLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICBkYi5IaXN0b3J5LnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZEhpc3Rvcnk6IHJlcS5wYXJhbXMuaWRIaXN0b3J5XG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoaGlzdG9yeSkgPT4ge1xuICAgICAgcmVzLmpzb24oe1xuICAgICAgICBpZEhpc3Rvcnk6IGhpc3RvcnkuaWRIaXN0b3J5LFxuICAgICAgICBoaXN0b3J5TW9kaWY6IGhpc3RvcnkuaGlzdG9yeU1vZGlmLFxuICAgICAgICBoaXN0b3J5RGVzY3JpcHRpb246IGhpc3RvcnkuaGlzdG9yeURlc2NyaXB0aW9uLFxuICAgICAgICBoaXN0b3J5U3RhdGU6IGhpc3RvcnkuaGlzdG9yeVN0YXRlXG4gICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5sb1JvdXRlci5kZWxldGUoJy86aWRIaXN0b3J5JywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgZGIuSGlzdG9yeS5kZXN0cm95KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkSGlzdG9yeTogcmVxLnBhcmFtcy5pZEhpc3RvcnlcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChoaXN0b3J5KSA9PiB7XG4gICAgICByZXMuanNvbih7XG4gICAgICAgIHJlc3VsdDogJ3N1Y2Nlc3MnXG4gICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvUm91dGVyXG4iXX0=

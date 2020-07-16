const i=require("express"),t=require("../database/index.model");let o=i.Router();o.get("/",(function(i,o){t.History.findAll().then(i=>{i=i.map(i=>({idHistory:i.idHistory,historyModif:i.historyModif,historyDescription:i.historyDescription,historyState:i.historyState})),o.json(i)})})),o.get("/:idHistory",(function(i,o){t.History.findOne({where:{idHistory:i.params.idHistory}}).then(i=>{o.json({idHistory:i.idHistory,historyModif:i.historyModif,historyDescription:i.historyDescription,historyState:i.historyState})})})),o.post("/",(function(i,o){t.History.create(i.body).then(i=>{o.json({idHistory:i.idHistory,historyModif:i.historyModif,historyDescription:i.historyDescription,historyState:i.historyState})})})),o.put("/:idHistory",(function(i,o){t.History.update({where:{idHistory:i.params.idHistory}}).then(i=>{o.json({idHistory:i.idHistory,historyModif:i.historyModif,historyDescription:i.historyDescription,historyState:i.historyState})})})),o.delete("/:idHistory",(function(i,o){t.History.destroy({where:{idHistory:i.params.idHistory}}).then(i=>{o.json({result:"success"})})})),module.exports=o;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9yb3V0ZXMvaGlzdG9yeS5zYXZlLnJvdXRlLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwiZGIiLCJsb1JvdXRlciIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsIkhpc3RvcnkiLCJmaW5kQWxsIiwidGhlbiIsImhpc3RvcnlzIiwibWFwIiwiaGlzdG9yeSIsImlkSGlzdG9yeSIsImhpc3RvcnlNb2RpZiIsImhpc3RvcnlEZXNjcmlwdGlvbiIsImhpc3RvcnlTdGF0ZSIsImpzb24iLCJmaW5kT25lIiwid2hlcmUiLCJwYXJhbXMiLCJwb3N0IiwiY3JlYXRlIiwiYm9keSIsInB1dCIsInVwZGF0ZSIsImRlbGV0ZSIsImRlc3Ryb3kiLCJyZXN1bHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxFQUFVQyxRQUFRLFdBQ2xCQyxFQUFLRCxRQUFRLDJCQUVuQixJQUFJRSxFQUFXSCxFQUFRSSxTQUV2QkQsRUFBU0UsSUFBSSxLQUFLLFNBQVNDLEVBQUtDLEdBQzlCTCxFQUFHTSxRQUFRQyxVQUFVQyxLQUFNQyxJQUN6QkEsRUFBV0EsRUFBU0MsSUFBSUMsSUFDZixDQUNMQyxVQUFXRCxFQUFRQyxVQUNuQkMsYUFBY0YsRUFBUUUsYUFDdEJDLG1CQUFvQkgsRUFBUUcsbUJBQzVCQyxhQUFjSixFQUFRSSxnQkFHMUJWLEVBQUlXLEtBQUtQLFFBSWJSLEVBQVNFLElBQUksZUFBZSxTQUFTQyxFQUFLQyxHQUN4Q0wsRUFBR00sUUFBUVcsUUFBUSxDQUNqQkMsTUFBTyxDQUNMTixVQUFXUixFQUFJZSxPQUFPUCxhQUV2QkosS0FBTUcsSUFDUE4sRUFBSVcsS0FBSyxDQUNQSixVQUFXRCxFQUFRQyxVQUNuQkMsYUFBY0YsRUFBUUUsYUFDdEJDLG1CQUFvQkgsRUFBUUcsbUJBQzVCQyxhQUFjSixFQUFRSSxvQkFLNUJkLEVBQVNtQixLQUFLLEtBQUssU0FBU2hCLEVBQUtDLEdBQy9CTCxFQUFHTSxRQUFRZSxPQUFPakIsRUFBSWtCLE1BQ25CZCxLQUFNRyxJQUNMTixFQUFJVyxLQUFLLENBQ1BKLFVBQVdELEVBQVFDLFVBQ25CQyxhQUFjRixFQUFRRSxhQUN0QkMsbUJBQW9CSCxFQUFRRyxtQkFDNUJDLGFBQWNKLEVBQVFJLG9CQUs5QmQsRUFBU3NCLElBQUksZUFBZSxTQUFTbkIsRUFBS0MsR0FDeENMLEVBQUdNLFFBQVFrQixPQUFPLENBQ2ROLE1BQU8sQ0FDTE4sVUFBV1IsRUFBSWUsT0FBT1AsYUFHekJKLEtBQU1HLElBQ0xOLEVBQUlXLEtBQUssQ0FDUEosVUFBV0QsRUFBUUMsVUFDbkJDLGFBQWNGLEVBQVFFLGFBQ3RCQyxtQkFBb0JILEVBQVFHLG1CQUM1QkMsYUFBY0osRUFBUUksb0JBSzlCZCxFQUFTd0IsT0FBTyxlQUFlLFNBQVNyQixFQUFLQyxHQUMzQ0wsRUFBR00sUUFBUW9CLFFBQVEsQ0FDZlIsTUFBTyxDQUNMTixVQUFXUixFQUFJZSxPQUFPUCxhQUd6QkosS0FBTUcsSUFDTE4sRUFBSVcsS0FBSyxDQUNQVyxPQUFRLGlCQUtoQkMsT0FBT0MsUUFBVTVCIiwiZmlsZSI6Im1vZHVsZS9yb3V0ZXMvaGlzdG9yeS5zYXZlLnJvdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGRiID0gcmVxdWlyZSgnLi4vZGF0YWJhc2UvaW5kZXgubW9kZWwnKTtcblxubGV0IGxvUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxubG9Sb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgZGIuSGlzdG9yeS5maW5kQWxsKCkudGhlbigoaGlzdG9yeXMpID0+IHtcbiAgICBoaXN0b3J5cyA9IGhpc3RvcnlzLm1hcChoaXN0b3J5ID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkSGlzdG9yeTogaGlzdG9yeS5pZEhpc3RvcnksXG4gICAgICAgIGhpc3RvcnlNb2RpZjogaGlzdG9yeS5oaXN0b3J5TW9kaWYsXG4gICAgICAgIGhpc3RvcnlEZXNjcmlwdGlvbjogaGlzdG9yeS5oaXN0b3J5RGVzY3JpcHRpb24sXG4gICAgICAgIGhpc3RvcnlTdGF0ZTogaGlzdG9yeS5oaXN0b3J5U3RhdGVcbiAgICAgIH1cbiAgICB9KVxuICAgIHJlcy5qc29uKGhpc3RvcnlzKTtcbiAgfSk7XG59KTtcblxubG9Sb3V0ZXIuZ2V0KCcvOmlkSGlzdG9yeScsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGRiLkhpc3RvcnkuZmluZE9uZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkSGlzdG9yeTogcmVxLnBhcmFtcy5pZEhpc3RvcnlcbiAgICB9XG4gIH0pLnRoZW4oKGhpc3RvcnkpID0+IHtcbiAgICByZXMuanNvbih7XG4gICAgICBpZEhpc3Rvcnk6IGhpc3RvcnkuaWRIaXN0b3J5LFxuICAgICAgaGlzdG9yeU1vZGlmOiBoaXN0b3J5Lmhpc3RvcnlNb2RpZixcbiAgICAgIGhpc3RvcnlEZXNjcmlwdGlvbjogaGlzdG9yeS5oaXN0b3J5RGVzY3JpcHRpb24sXG4gICAgICBoaXN0b3J5U3RhdGU6IGhpc3RvcnkuaGlzdG9yeVN0YXRlXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmxvUm91dGVyLnBvc3QoJy8nLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICBkYi5IaXN0b3J5LmNyZWF0ZShyZXEuYm9keSlcbiAgICAudGhlbigoaGlzdG9yeSkgPT4ge1xuICAgICAgcmVzLmpzb24oe1xuICAgICAgICBpZEhpc3Rvcnk6IGhpc3RvcnkuaWRIaXN0b3J5LFxuICAgICAgICBoaXN0b3J5TW9kaWY6IGhpc3RvcnkuaGlzdG9yeU1vZGlmLFxuICAgICAgICBoaXN0b3J5RGVzY3JpcHRpb246IGhpc3RvcnkuaGlzdG9yeURlc2NyaXB0aW9uLFxuICAgICAgICBoaXN0b3J5U3RhdGU6IGhpc3RvcnkuaGlzdG9yeVN0YXRlXG4gICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5sb1JvdXRlci5wdXQoJy86aWRIaXN0b3J5JywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgZGIuSGlzdG9yeS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWRIaXN0b3J5OiByZXEucGFyYW1zLmlkSGlzdG9yeVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKGhpc3RvcnkpID0+IHtcbiAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgaWRIaXN0b3J5OiBoaXN0b3J5LmlkSGlzdG9yeSxcbiAgICAgICAgaGlzdG9yeU1vZGlmOiBoaXN0b3J5Lmhpc3RvcnlNb2RpZixcbiAgICAgICAgaGlzdG9yeURlc2NyaXB0aW9uOiBoaXN0b3J5Lmhpc3RvcnlEZXNjcmlwdGlvbixcbiAgICAgICAgaGlzdG9yeVN0YXRlOiBoaXN0b3J5Lmhpc3RvcnlTdGF0ZVxuICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxubG9Sb3V0ZXIuZGVsZXRlKCcvOmlkSGlzdG9yeScsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGRiLkhpc3RvcnkuZGVzdHJveSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZEhpc3Rvcnk6IHJlcS5wYXJhbXMuaWRIaXN0b3J5XG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoaGlzdG9yeSkgPT4ge1xuICAgICAgcmVzLmpzb24oe1xuICAgICAgICByZXN1bHQ6ICdzdWNjZXNzJ1xuICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb1JvdXRlclxuIl19

const e=require("fs"),l=require("path"),o=require("./database");let s={},r=l.normalize(__dirname+"/models/"),a=e.readdirSync(r,{withFileTypes:!0});for(let e of a)if(e.isFile()){let l=e.name,r=l.split(".");if(3==r.length&&"model"==r[1]&&"js"==r[2]){let e=r[0].toLowerCase().split("-").reduce((e,l)=>e+l[0].toUpperCase()+l.substring(1),"");console.log(`load model ${e} in ${l}`);let a=require("./models/"+l);s[e]=o.define("table"+e,a)}}s.User.hasMany(s.History,{foreignKey:{name:"fkUser",allowNull:!1}}),s.History.belongsTo(s.User,{foreignKey:{name:"fkUser",allowNull:!1}}),s.Ticket.hasMany(s.History,{foreignKey:{name:"fkTicket",allowNull:!1}}),s.History.belongsTo(s.Ticket,{foreignKey:{name:"fkTicket",allowNull:!1}}),s.User.hasMany(s.Ticket,{foreignKey:{name:"fkUserCreator",allowNull:!1},as:"Creator"}),s.Ticket.belongsTo(s.User,{foreignKey:{name:"fkUserCreator",allowNull:!1},as:"Creator"}),s.User.hasMany(s.Ticket,{foreignKey:{name:"fkUserResponsible",allowNull:!0},as:"Responsible"}),s.Ticket.belongsTo(s.User,{foreignKey:{name:"fkUserResponsible",allowNull:!0},as:"Responsible"}),s.User.hasMany(s.Ticket,{foreignKey:{name:"fkUserResolver",allowNull:!0},as:"Resolver"}),s.Ticket.belongsTo(s.User,{foreignKey:{name:"fkUserResolver",allowNull:!0},as:"Resolver"}),o.sync({alter:"production"!==process.env.NODE_ENV&&{drop:!0}}),module.exports=s;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9kYXRhYmFzZS9pbmRleC5tb2RlbC5qcyJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJwYXRoIiwic2VxdWVsaXplIiwibG9SZXN1bHQiLCJsb0RpcmVjdG9yaVBhdGgiLCJub3JtYWxpemUiLCJfX2Rpcm5hbWUiLCJsdEZpbGVMaXN0IiwicmVhZGRpclN5bmMiLCJ3aXRoRmlsZVR5cGVzIiwibHNGaWxlIiwiaXNGaWxlIiwibHNGaWxlTmFtZSIsIm5hbWUiLCJsdEZpbGVOYW1lU3BsaXQiLCJzcGxpdCIsImxlbmd0aCIsImxzTW9kZWxOYW1lIiwidG9Mb3dlckNhc2UiLCJyZWR1Y2UiLCJsc0FjY3VtdWxhdG9yIiwibHNDdXJyZW50VmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJsb01vZGVsIiwiZGVmaW5lIiwiVXNlciIsImhhc01hbnkiLCJIaXN0b3J5IiwiZm9yZWlnbktleSIsImFsbG93TnVsbCIsImJlbG9uZ3NUbyIsIlRpY2tldCIsImFzIiwic3luYyIsImFsdGVyIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZHJvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEVBQUtDLFFBQVEsTUFDYkMsRUFBT0QsUUFBUSxRQUVmRSxFQUFZRixRQUFRLGNBRTFCLElBQUlHLEVBQVcsR0FFWEMsRUFBa0JILEVBQUtJLFVBQVVDLFVBQVksWUFFN0NDLEVBQWFSLEVBQUdTLFlBQVlKLEVBQWlCLENBQy9DSyxlQUFlLElBR2pCLElBQUssSUFBSUMsS0FBVUgsRUFDakIsR0FBSUcsRUFBT0MsU0FBVSxDQUVuQixJQUFJQyxFQUFhRixFQUFPRyxLQUVwQkMsRUFBa0JGLEVBQVdHLE1BQU0sS0FFdkMsR0FBOEIsR0FBMUJELEVBQWdCRSxRQUFxQyxTQUF0QkYsRUFBZ0IsSUFBdUMsTUFBdEJBLEVBQWdCLEdBQVksQ0FFOUYsSUFBSUcsRUFBY0gsRUFBZ0IsR0FDL0JJLGNBQ0FILE1BQU0sS0FDTkksT0FBTyxDQUFDQyxFQUFlQyxJQUNmRCxFQUFnQkMsRUFBZSxHQUFHQyxjQUFnQkQsRUFBZUUsVUFBVSxHQUNqRixJQUVMQyxRQUFRQyxJQUFJLGNBQWNSLFFBQWtCTCxLQUU1QyxJQUFJYyxFQUFVMUIsUUFBUSxZQUFjWSxHQUVwQ1QsRUFBU2MsR0FBZWYsRUFBVXlCLE9BQU8sUUFBVVYsRUFBYVMsSUFPdEV2QixFQUFTeUIsS0FBS0MsUUFBUTFCLEVBQVMyQixRQUFTLENBQ3RDQyxXQUFZLENBQ1ZsQixLQUFNLFNBQ05tQixXQUFXLEtBR2Y3QixFQUFTMkIsUUFBUUcsVUFBVTlCLEVBQVN5QixLQUFNLENBQ3hDRyxXQUFZLENBQ1ZsQixLQUFNLFNBQ05tQixXQUFXLEtBS2Y3QixFQUFTK0IsT0FBT0wsUUFBUTFCLEVBQVMyQixRQUFTLENBQ3hDQyxXQUFZLENBQ1ZsQixLQUFNLFdBQ05tQixXQUFXLEtBR2Y3QixFQUFTMkIsUUFBUUcsVUFBVTlCLEVBQVMrQixPQUFRLENBQzFDSCxXQUFZLENBQ1ZsQixLQUFNLFdBQ05tQixXQUFXLEtBS2Y3QixFQUFTeUIsS0FBS0MsUUFBUTFCLEVBQVMrQixPQUFRLENBQ3JDSCxXQUFZLENBQ1ZsQixLQUFNLGdCQUNObUIsV0FBVyxHQUViRyxHQUFJLFlBRU5oQyxFQUFTK0IsT0FBT0QsVUFBVTlCLEVBQVN5QixLQUFNLENBQ3ZDRyxXQUFZLENBQ1ZsQixLQUFNLGdCQUNObUIsV0FBVyxHQUViRyxHQUFJLFlBSU5oQyxFQUFTeUIsS0FBS0MsUUFBUTFCLEVBQVMrQixPQUFRLENBQ3JDSCxXQUFZLENBQ1ZsQixLQUFNLG9CQUNObUIsV0FBVyxHQUViRyxHQUFJLGdCQUVOaEMsRUFBUytCLE9BQU9ELFVBQVU5QixFQUFTeUIsS0FBTSxDQUN2Q0csV0FBWSxDQUNWbEIsS0FBTSxvQkFDTm1CLFdBQVcsR0FFYkcsR0FBSSxnQkFJTmhDLEVBQVN5QixLQUFLQyxRQUFRMUIsRUFBUytCLE9BQVEsQ0FDckNILFdBQVksQ0FDVmxCLEtBQU0saUJBQ05tQixXQUFXLEdBRWJHLEdBQUksYUFFTmhDLEVBQVMrQixPQUFPRCxVQUFVOUIsRUFBU3lCLEtBQU0sQ0FDdkNHLFdBQVksQ0FDVmxCLEtBQU0saUJBQ05tQixXQUFXLEdBRWJHLEdBQUksYUFHTmpDLEVBQVVrQyxLQUFLLENBQ2JDLE1BQWdDLGVBQXpCQyxRQUFRQyxJQUFJQyxVQUE0QixDQUM3Q0MsTUFBTSxLQUlWQyxPQUFPQyxRQUFVeEMiLCJmaWxlIjoibW9kdWxlL2RhdGFiYXNlL2luZGV4Lm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3Qgc2VxdWVsaXplID0gcmVxdWlyZSgnLi9kYXRhYmFzZScpO1xuXG5sZXQgbG9SZXN1bHQgPSB7fTtcblxubGV0IGxvRGlyZWN0b3JpUGF0aCA9IHBhdGgubm9ybWFsaXplKF9fZGlybmFtZSArICcvbW9kZWxzLycpO1xuXG5sZXQgbHRGaWxlTGlzdCA9IGZzLnJlYWRkaXJTeW5jKGxvRGlyZWN0b3JpUGF0aCwge1xuICB3aXRoRmlsZVR5cGVzOiB0cnVlXG59KTtcblxuZm9yIChsZXQgbHNGaWxlIG9mIGx0RmlsZUxpc3QpIHtcbiAgaWYgKGxzRmlsZS5pc0ZpbGUoKSkge1xuXG4gICAgbGV0IGxzRmlsZU5hbWUgPSBsc0ZpbGUubmFtZTtcblxuICAgIGxldCBsdEZpbGVOYW1lU3BsaXQgPSBsc0ZpbGVOYW1lLnNwbGl0KCcuJyk7XG5cbiAgICBpZiAobHRGaWxlTmFtZVNwbGl0Lmxlbmd0aCA9PSAzICYmIGx0RmlsZU5hbWVTcGxpdFsxXSA9PSBcIm1vZGVsXCIgJiYgbHRGaWxlTmFtZVNwbGl0WzJdID09IFwianNcIikge1xuXG4gICAgICBsZXQgbHNNb2RlbE5hbWUgPSBsdEZpbGVOYW1lU3BsaXRbMF1cbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnNwbGl0KCctJylcbiAgICAgICAgLnJlZHVjZSgobHNBY2N1bXVsYXRvciwgbHNDdXJyZW50VmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gbHNBY2N1bXVsYXRvciArIGxzQ3VycmVudFZhbHVlWzBdLnRvVXBwZXJDYXNlKCkgKyBsc0N1cnJlbnRWYWx1ZS5zdWJzdHJpbmcoMSlcbiAgICAgICAgfSwgXCJcIilcblxuICAgICAgY29uc29sZS5sb2coYGxvYWQgbW9kZWwgJHtsc01vZGVsTmFtZX0gaW4gJHtsc0ZpbGVOYW1lfWApO1xuXG4gICAgICBsZXQgbG9Nb2RlbCA9IHJlcXVpcmUoXCIuL21vZGVscy9cIiArIGxzRmlsZU5hbWUpO1xuXG4gICAgICBsb1Jlc3VsdFtsc01vZGVsTmFtZV0gPSBzZXF1ZWxpemUuZGVmaW5lKCd0YWJsZScgKyBsc01vZGVsTmFtZSwgbG9Nb2RlbCk7XG4gICAgfVxuXG4gIH1cbn1cblxuLy9yZWxhdGlvbiBIaXN0b3J5LVVzZXJcbmxvUmVzdWx0LlVzZXIuaGFzTWFueShsb1Jlc3VsdC5IaXN0b3J5LCB7XG4gIGZvcmVpZ25LZXk6IHtcbiAgICBuYW1lOiAnZmtVc2VyJyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH1cbn0pO1xubG9SZXN1bHQuSGlzdG9yeS5iZWxvbmdzVG8obG9SZXN1bHQuVXNlciwge1xuICBmb3JlaWduS2V5OiB7XG4gICAgbmFtZTogJ2ZrVXNlcicsXG4gICAgYWxsb3dOdWxsOiBmYWxzZVxuICB9XG59KTtcblxuLy9yZWxhdGlvbiBIaXN0b3J5LVRpY2tldFxubG9SZXN1bHQuVGlja2V0Lmhhc01hbnkobG9SZXN1bHQuSGlzdG9yeSwge1xuICBmb3JlaWduS2V5OiB7XG4gICAgbmFtZTogJ2ZrVGlja2V0JyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH1cbn0pO1xubG9SZXN1bHQuSGlzdG9yeS5iZWxvbmdzVG8obG9SZXN1bHQuVGlja2V0LCB7XG4gIGZvcmVpZ25LZXk6IHtcbiAgICBuYW1lOiAnZmtUaWNrZXQnLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfVxufSk7XG5cbi8vcmVsYXRpb24gVGlja2V0LVVzZXIgQ3JlYXRvclxubG9SZXN1bHQuVXNlci5oYXNNYW55KGxvUmVzdWx0LlRpY2tldCwge1xuICBmb3JlaWduS2V5OiB7XG4gICAgbmFtZTogJ2ZrVXNlckNyZWF0b3InLFxuICAgIGFsbG93TnVsbDogZmFsc2VcbiAgfSxcbiAgYXM6ICdDcmVhdG9yJ1xufSk7XG5sb1Jlc3VsdC5UaWNrZXQuYmVsb25nc1RvKGxvUmVzdWx0LlVzZXIsIHtcbiAgZm9yZWlnbktleToge1xuICAgIG5hbWU6ICdma1VzZXJDcmVhdG9yJyxcbiAgICBhbGxvd051bGw6IGZhbHNlXG4gIH0sXG4gIGFzOiAnQ3JlYXRvcidcbn0pO1xuXG4vL3JlbGF0aW9uIFRpY2tldC1Vc2VyIFJlc3BvbnNpYmxlXG5sb1Jlc3VsdC5Vc2VyLmhhc01hbnkobG9SZXN1bHQuVGlja2V0LCB7XG4gIGZvcmVpZ25LZXk6IHtcbiAgICBuYW1lOiAnZmtVc2VyUmVzcG9uc2libGUnLFxuICAgIGFsbG93TnVsbDogdHJ1ZVxuICB9LFxuICBhczogJ1Jlc3BvbnNpYmxlJ1xufSk7XG5sb1Jlc3VsdC5UaWNrZXQuYmVsb25nc1RvKGxvUmVzdWx0LlVzZXIsIHtcbiAgZm9yZWlnbktleToge1xuICAgIG5hbWU6ICdma1VzZXJSZXNwb25zaWJsZScsXG4gICAgYWxsb3dOdWxsOiB0cnVlXG4gIH0sXG4gIGFzOiAnUmVzcG9uc2libGUnXG59KTtcblxuLy9yZWxhdGlvbiBUaWNrZXQtVXNlciBSZXNvbHZlclxubG9SZXN1bHQuVXNlci5oYXNNYW55KGxvUmVzdWx0LlRpY2tldCwge1xuICBmb3JlaWduS2V5OiB7XG4gICAgbmFtZTogJ2ZrVXNlclJlc29sdmVyJyxcbiAgICBhbGxvd051bGw6IHRydWVcbiAgfSxcbiAgYXM6ICdSZXNvbHZlcidcbn0pO1xubG9SZXN1bHQuVGlja2V0LmJlbG9uZ3NUbyhsb1Jlc3VsdC5Vc2VyLCB7XG4gIGZvcmVpZ25LZXk6IHtcbiAgICBuYW1lOiAnZmtVc2VyUmVzb2x2ZXInLFxuICAgIGFsbG93TnVsbDogdHJ1ZVxuICB9LFxuICBhczogJ1Jlc29sdmVyJ1xufSk7XG5cbnNlcXVlbGl6ZS5zeW5jKHtcbiAgYWx0ZXI6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB7XG4gICAgZHJvcDogdHJ1ZVxuICB9IDogZmFsc2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvUmVzdWx0O1xuIl19

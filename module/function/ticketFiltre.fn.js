module.exports={ticketFiltre:e=>{let t={};return t.idTicket=e.idTicket,t.ticketCreation=e.ticketCreation,t.ticketResolve=e.ticketResolve,t.ticketDelete=e.ticketDelete,t.ticketDescription=e.ticketDescription,t.ticketState=e.ticketState,t.ticketHardware=e.ticketHardware,t.ticketHistory=e.tableHistories?e.tableHistories.map(e=>({idHistory:e.idHistory,historyModif:e.historyModif,historyDescription:e.historyDescription,historyState:e.historyState,historyUser:{idUser:e.tableUser.idUser,userLastName:e.tableUser.userLastName,userFirstName:e.tableUser.userFirstName}})):null,t.ticketCreator={idUser:e.Creator.idUser,userLastName:e.Creator.userLastName,userFirstName:e.Creator.userFirstName},t.ticketResolver=e.Resolver?{idUser:e.Resolver.idUser,userLastName:e.Resolver.userLastName,userFirstName:e.Resolver.userFirstName}:null,t.ticketResponsible=e.Responsible?{idUser:e.Responsible.idUser,userLastName:e.Responsible.userLastName,userFirstName:e.Responsible.userFirstName}:null,t}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9mdW5jdGlvbi90aWNrZXRGaWx0cmUuZm4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInRpY2tldEZpbHRyZSIsInBvVGlja2V0IiwicG9UaWNrZXRSZXN1bHQiLCJpZFRpY2tldCIsInRpY2tldENyZWF0aW9uIiwidGlja2V0UmVzb2x2ZSIsInRpY2tldERlbGV0ZSIsInRpY2tldERlc2NyaXB0aW9uIiwidGlja2V0U3RhdGUiLCJ0aWNrZXRIYXJkd2FyZSIsInRpY2tldEhpc3RvcnkiLCJ0YWJsZUhpc3RvcmllcyIsIm1hcCIsInBvSGlzdG9yeSIsImlkSGlzdG9yeSIsImhpc3RvcnlNb2RpZiIsImhpc3RvcnlEZXNjcmlwdGlvbiIsImhpc3RvcnlTdGF0ZSIsImhpc3RvcnlVc2VyIiwiaWRVc2VyIiwidGFibGVVc2VyIiwidXNlckxhc3ROYW1lIiwidXNlckZpcnN0TmFtZSIsInRpY2tldENyZWF0b3IiLCJDcmVhdG9yIiwidGlja2V0UmVzb2x2ZXIiLCJSZXNvbHZlciIsInRpY2tldFJlc3BvbnNpYmxlIiwiUmVzcG9uc2libGUiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPQyxRQUFVLENBQ2ZDLGFBQWVDLElBQ2IsSUFBSUMsRUFBaUIsR0FpRXJCLE9BL0RBQSxFQUFlQyxTQUFXRixFQUFTRSxTQUVuQ0QsRUFBZUUsZUFBaUJILEVBQVNHLGVBRXpDRixFQUFlRyxjQUFnQkosRUFBU0ksY0FFeENILEVBQWVJLGFBQWVMLEVBQVNLLGFBRXZDSixFQUFlSyxrQkFBb0JOLEVBQVNNLGtCQUU1Q0wsRUFBZU0sWUFBY1AsRUFBU08sWUFFdENOLEVBQWVPLGVBQWlCUixFQUFTUSxlQUV6Q1AsRUFBZVEsY0FBa0JULEVBQVNVLGVBQWlCVixFQUFTVSxlQUFlQyxJQUFJQyxJQUM5RSxDQUNMQyxVQUFXRCxFQUFVQyxVQUNyQkMsYUFBY0YsRUFBVUUsYUFDeEJDLG1CQUFvQkgsRUFBVUcsbUJBQzlCQyxhQUFjSixFQUFVSSxhQUN4QkMsWUFBYSxDQUNYQyxPQUFRTixFQUFVTyxVQUFVRCxPQUM1QkUsYUFBY1IsRUFBVU8sVUFBVUMsYUFDbENDLGNBQWVULEVBQVVPLFVBQVVFLGtCQUdwQyxLQUVMcEIsRUFBZXFCLGNBQWdCLENBQzdCSixPQUFRbEIsRUFBU3VCLFFBQVFMLE9BQ3pCRSxhQUFjcEIsRUFBU3VCLFFBQVFILGFBQy9CQyxjQUFlckIsRUFBU3VCLFFBQVFGLGVBR2xDcEIsRUFBZXVCLGVBQW1CeEIsRUFBU3lCLFNBQVcsQ0FDcERQLE9BQVFsQixFQUFTeUIsU0FBU1AsT0FDMUJFLGFBQWNwQixFQUFTeUIsU0FBU0wsYUFDaENDLGNBQWVyQixFQUFTeUIsU0FBU0osZUFDL0IsS0FFSnBCLEVBQWV5QixrQkFBc0IxQixFQUFTMkIsWUFBYyxDQUMxRFQsT0FBUWxCLEVBQVMyQixZQUFZVCxPQUM3QkUsYUFBY3BCLEVBQVMyQixZQUFZUCxhQUNuQ0MsY0FBZXJCLEVBQVMyQixZQUFZTixlQUNsQyxLQW1CR3BCIiwiZmlsZSI6Im1vZHVsZS9mdW5jdGlvbi90aWNrZXRGaWx0cmUuZm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGlja2V0RmlsdHJlOiAocG9UaWNrZXQpID0+IHtcbiAgICBsZXQgcG9UaWNrZXRSZXN1bHQgPSB7fVxuXG4gICAgcG9UaWNrZXRSZXN1bHQuaWRUaWNrZXQgPSBwb1RpY2tldC5pZFRpY2tldFxuXG4gICAgcG9UaWNrZXRSZXN1bHQudGlja2V0Q3JlYXRpb24gPSBwb1RpY2tldC50aWNrZXRDcmVhdGlvblxuXG4gICAgcG9UaWNrZXRSZXN1bHQudGlja2V0UmVzb2x2ZSA9IHBvVGlja2V0LnRpY2tldFJlc29sdmVcblxuICAgIHBvVGlja2V0UmVzdWx0LnRpY2tldERlbGV0ZSA9IHBvVGlja2V0LnRpY2tldERlbGV0ZVxuXG4gICAgcG9UaWNrZXRSZXN1bHQudGlja2V0RGVzY3JpcHRpb24gPSBwb1RpY2tldC50aWNrZXREZXNjcmlwdGlvblxuXG4gICAgcG9UaWNrZXRSZXN1bHQudGlja2V0U3RhdGUgPSBwb1RpY2tldC50aWNrZXRTdGF0ZVxuXG4gICAgcG9UaWNrZXRSZXN1bHQudGlja2V0SGFyZHdhcmUgPSBwb1RpY2tldC50aWNrZXRIYXJkd2FyZVxuXG4gICAgcG9UaWNrZXRSZXN1bHQudGlja2V0SGlzdG9yeSA9ICEhcG9UaWNrZXQudGFibGVIaXN0b3JpZXMgPyBwb1RpY2tldC50YWJsZUhpc3Rvcmllcy5tYXAocG9IaXN0b3J5ID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkSGlzdG9yeTogcG9IaXN0b3J5LmlkSGlzdG9yeSxcbiAgICAgICAgaGlzdG9yeU1vZGlmOiBwb0hpc3RvcnkuaGlzdG9yeU1vZGlmLFxuICAgICAgICBoaXN0b3J5RGVzY3JpcHRpb246IHBvSGlzdG9yeS5oaXN0b3J5RGVzY3JpcHRpb24sXG4gICAgICAgIGhpc3RvcnlTdGF0ZTogcG9IaXN0b3J5Lmhpc3RvcnlTdGF0ZSxcbiAgICAgICAgaGlzdG9yeVVzZXI6IHtcbiAgICAgICAgICBpZFVzZXI6IHBvSGlzdG9yeS50YWJsZVVzZXIuaWRVc2VyLFxuICAgICAgICAgIHVzZXJMYXN0TmFtZTogcG9IaXN0b3J5LnRhYmxlVXNlci51c2VyTGFzdE5hbWUsXG4gICAgICAgICAgdXNlckZpcnN0TmFtZTogcG9IaXN0b3J5LnRhYmxlVXNlci51c2VyRmlyc3ROYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSA6IG51bGxcblxuICAgIHBvVGlja2V0UmVzdWx0LnRpY2tldENyZWF0b3IgPSB7XG4gICAgICBpZFVzZXI6IHBvVGlja2V0LkNyZWF0b3IuaWRVc2VyLFxuICAgICAgdXNlckxhc3ROYW1lOiBwb1RpY2tldC5DcmVhdG9yLnVzZXJMYXN0TmFtZSxcbiAgICAgIHVzZXJGaXJzdE5hbWU6IHBvVGlja2V0LkNyZWF0b3IudXNlckZpcnN0TmFtZVxuICAgIH1cblxuICAgIHBvVGlja2V0UmVzdWx0LnRpY2tldFJlc29sdmVyID0gISFwb1RpY2tldC5SZXNvbHZlciA/IHtcbiAgICAgIGlkVXNlcjogcG9UaWNrZXQuUmVzb2x2ZXIuaWRVc2VyLFxuICAgICAgdXNlckxhc3ROYW1lOiBwb1RpY2tldC5SZXNvbHZlci51c2VyTGFzdE5hbWUsXG4gICAgICB1c2VyRmlyc3ROYW1lOiBwb1RpY2tldC5SZXNvbHZlci51c2VyRmlyc3ROYW1lXG4gICAgfSA6IG51bGxcblxuICAgIHBvVGlja2V0UmVzdWx0LnRpY2tldFJlc3BvbnNpYmxlID0gISFwb1RpY2tldC5SZXNwb25zaWJsZSA/IHtcbiAgICAgIGlkVXNlcjogcG9UaWNrZXQuUmVzcG9uc2libGUuaWRVc2VyLFxuICAgICAgdXNlckxhc3ROYW1lOiBwb1RpY2tldC5SZXNwb25zaWJsZS51c2VyTGFzdE5hbWUsXG4gICAgICB1c2VyRmlyc3ROYW1lOiBwb1RpY2tldC5SZXNwb25zaWJsZS51c2VyRmlyc3ROYW1lXG4gICAgfSA6IG51bGxcblxuICAgIC8vIHtcbiAgICAvLyAgICAgICBcImlkVGlja2V0XCI6IFwiMDI2NzZlZjctY2EyZC00OGNiLWExODMtMzNhYzU1YjMwN2ZmXCIsXG4gICAgLy8gICAgICAgXCJ0aWNrZXRDcmVhdGlvblwiOiBcIjIwMjAtMDctMDlUMDc6MjA6MzcuMDAwWlwiLFxuICAgIC8vICAgICAgIFwidGlja2V0UmVzb2x2ZVwiOiBudWxsLFxuICAgIC8vICAgICAgIFwidGlja2V0RGVsZXRlXCI6IG51bGwsXG4gICAgLy8gICAgICAgXCJ0aWNrZXREZXNjcmlwdGlvblwiOiBcIjIzZGM3ZDg3MWJhZDE0MGM4M2M0ODJmNTRiMjBhODg1XCIsXG4gICAgLy8gICAgICAgXCJ0aWNrZXRTdGF0ZVwiOiAwLFxuICAgIC8vICAgICAgIFwidGlja2V0SGFyZHdhcmVcIjogXCI1OGVmY2Y1Yjc4OTM5NjNmMzM1NGVjMzcxYWQ1YjE2ZVwiLFxuICAgIC8vICAgICAgIFwiUmVzcG9uc2libGVcIjogbnVsbCxcbiAgICAvLyAgICAgICBcIkNyZWF0b3JcIjoge1xuICAgIC8vICAgICAgICAgICBcImlkVXNlclwiOiBcImE1NzE5OGFmLTU1NWEtNDlmZC04ZWVmLTFhYzliNWI5NmZjZFwiLFxuICAgIC8vICAgICAgICAgICBcInVzZXJMYXN0TmFtZVwiOiBcInRlc3RcIixcbiAgICAvLyAgICAgICAgICAgXCJ1c2VyRmlyc3ROYW1lXCI6IFwidGVzdFwiXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICBcIlJlc29sdmVyXCI6IG51bGxcbiAgICAvLyAgIH1cblxuICAgIHJldHVybiBwb1RpY2tldFJlc3VsdDtcbiAgfVxufVxuIl19

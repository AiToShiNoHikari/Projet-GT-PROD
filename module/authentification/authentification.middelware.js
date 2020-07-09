const e=require("express"),t=require("crypto"),r=require("../database/index.model"),o=require("../function/pwGestion.fn"),n=require("../error.list"),s=36e5;let a={},i=null;function u(e){console.log("delete token => "+e),delete a[e]}function d(e){return new Promise((t,o)=>{if(!a[e])return t();clearTimeout(a[e].timeout),a[e].timeout=setTimeout(u,36e5,e),r.User.findOne({where:{idUser:a[e].user}}).then(t)})}function c(e){return new Promise((r,o)=>{try{let o=Date.now().toString(),n=t.createHmac("sha512",o).update(Date.now().toString()+JSON.stringify(e)+Date.now()).digest("hex");o=Date.now().toString(),n=t.createHmac("sha512",o).update(Date.now().toString()+n+e.idUser+Date.now()).digest("hex"),o=Date.now().toString();let s=t.createHmac("sha512",o).update(Date.now().toString()+Math.random()+Date.now()).digest("hex"),i=n+Date.now()+s,d=t.createHmac("sha512",o).update(i).digest("hex");i=n+Date.now()+s+Date.now()+d;let c={};c.token=i,c.user=e.idUser,c.timeout=setTimeout(u,36e5,i),a[i]=c,r(i)}catch(e){o(e)}})}function h(){return new Promise((e,r)=>{try{let r=Date.now().toString(),o=t.createHmac("sha512",r).update(Date.now().toString()+Math.random()+Date.now()).digest("hex");i="temp_"+o+Date.now(),e(i)}catch(e){r(e)}})}function l(e,t){return r.User.count({}).then(s=>{if(s)return r.User.findOne({where:{userLogin:e.body.userLogin}}).then(r=>{if(r){let s=o.fHashPW(e.body.userPassword,r);if(r.userHash==s)return c(r).then(e=>{t.json({token:e})});throw Error(n.badPW)}throw Error(n.badLogin)});if("root"==e.body.userPassword&&"root"==e.body.userLogin)return h().then(e=>{t.json({token:e})});throw Error(n.badLogin)})}function w(e,t){return new Promise((t,r)=>{let o=e.headers.token;a[o]instanceof Object&&(clearTimeout(a[o].timeout),u(o)),t()})}let g=e.Router(),m=e.Router();m.post("/login",(e,t)=>{null!=e.body.userLogin&&null!=e.body.userPassword?l(e,t).catch(e=>{t.json({error:e.message})}):t.json({error:n.badData})}),m.use("/disconnect",(e,t)=>{w(e,t).then(()=>{t.json({result:"disconnected"})}).catch(e=>{t.json({error:e.message})})}),g.use("/authentification",m),g.use("/",(e,t,o)=>{let s=e.headers.token;if(i)if(i==s&&"POST"==e.method){let r=e.path.split("/");"user"==r[r.length-1]?(e.token=s,i=null,o()):t.json({error:n.badToken})}else t.json({error:n.badToken});else s?d(s).then(r=>{null==r?t.json({error:n.badToken}):(e.user=r,e.token=s,o())}).catch(e=>{"production"===process.env.NODE_ENV?t.json({error:"error"}):t.json({error:e.message})}):"production"===process.env.NODE_ENV?t.json({error:n.noAuth}):r.User.findOne({where:{}}).then(t=>{t?(e.user=t.id,e.psToken=null,o()):(e.user="",e.psToken=null,o())})}),module.exports=g;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9hdXRoZW50aWZpY2F0aW9uL2F1dGhlbnRpZmljYXRpb24ubWlkZGVsd2FyZS5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImNyeXB0byIsImRiIiwibG9Qd0dlc3Rpb24iLCJnb0Vycm9yTGlzdCIsInBuVG9rZW5WYWxpZGl0eSIsImdvQ29ubmVjdGVkVG9rZW5zIiwiZ3NUZW1wc1Rva2VucyIsImZEZWxldGVUb2tlbiIsInBzVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZlRlc3RUb2tlbiIsIlByb21pc2UiLCJwUmVzb2x2ZSIsInBSZWplY3QiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsIlVzZXIiLCJmaW5kT25lIiwid2hlcmUiLCJpZFVzZXIiLCJ1c2VyIiwidGhlbiIsImZDcmVhdGVDb25uZWN0ZWRUb2tlbiIsInBvVXNlciIsImxzU2VjcmV0IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwibHNIYXNoIiwiY3JlYXRlSG1hYyIsInVwZGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaWdlc3QiLCJsc0hhc2gyIiwiTWF0aCIsInJhbmRvbSIsImxzSGFzaDMiLCJsb0Nvbm5lY3RlZFRva2VuIiwidG9rZW4iLCJlIiwiZkNyZWF0ZVRlbXBUb2tlbiIsImZDb25uZWN0IiwicmVxIiwicmVzIiwiY291bnQiLCJwbkNvdW50IiwidXNlckxvZ2luIiwiYm9keSIsImZIYXNoUFciLCJ1c2VyUGFzc3dvcmQiLCJ1c2VySGFzaCIsImpzb24iLCJFcnJvciIsImJhZFBXIiwiYmFkTG9naW4iLCJmRGlzY29ubmVjdCIsImhlYWRlcnMiLCJPYmplY3QiLCJnb1JvdXRlciIsIlJvdXRlciIsImdvQXV0aGVudGlmaWNhdGlvblJvdXRlciIsInBvc3QiLCJjYXRjaCIsImVyciIsImVycm9yIiwibWVzc2FnZSIsImJhZERhdGEiLCJ1c2UiLCJyZXN1bHQiLCJuZXh0IiwibWV0aG9kIiwibHRQYXRoIiwicGF0aCIsInNwbGl0IiwibGVuZ3RoIiwiYmFkVG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJub0F1dGgiLCJpZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEVBQVVDLFFBQVEsV0FDbEJDLEVBQVNELFFBQVEsVUFFakJFLEVBQUtGLFFBQVEsMkJBQ2JHLEVBQWNILFFBQVEsNEJBQ3RCSSxFQUFjSixRQUFRLGlCQUV0QkssRUFBa0IsS0FFeEIsSUFBSUMsRUFBb0IsR0FFcEJDLEVBQWdCLEtBRXBCLFNBQVNDLEVBQWFDLEdBQ3BCQyxRQUFRQyxJQUFJLG1CQUFtQkYsVUFDeEJILEVBQWtCRyxHQUczQixTQUFTRyxFQUFXSCxHQUNsQixPQUFPLElBQUlJLFFBQVEsQ0FBQ0MsRUFBVUMsS0FDNUIsSUFBTVQsRUFBa0JHLEdBV2pCLE9BQU9LLElBVlpFLGFBQWFWLEVBQWtCRyxHQUFTUSxTQUV4Q1gsRUFBa0JHLEdBQVNRLFFBQVVDLFdBQVdWLEVBaEI5QixLQWdCNkRDLEdBRS9FUCxFQUFHaUIsS0FBS0MsUUFBUSxDQUNkQyxNQUFPLENBQ0xDLE9BQVFoQixFQUFrQkcsR0FBU2MsUUFFcENDLEtBQUtWLEtBUWQsU0FBU1csRUFBc0JDLEdBQzdCLE9BQU8sSUFBSWIsUUFBUSxDQUFDQyxFQUFVQyxLQUM1QixJQUNFLElBQUlZLEVBQVdDLEtBQUtDLE1BQU1DLFdBQ3RCQyxFQUFTOUIsRUFBTytCLFdBQVcsU0FBVUwsR0FDdENNLE9BQU9MLEtBQUtDLE1BQU1DLFdBQWFJLEtBQUtDLFVBQVVULEdBQVVFLEtBQUtDLE9BQzdETyxPQUFPLE9BRVZULEVBQVdDLEtBQUtDLE1BQU1DLFdBQ3RCQyxFQUFTOUIsRUFBTytCLFdBQVcsU0FBVUwsR0FDbENNLE9BQU9MLEtBQUtDLE1BQU1DLFdBQWFDLEVBQVNMLEVBQU9KLE9BQVNNLEtBQUtDLE9BQzdETyxPQUFPLE9BQ1ZULEVBQVdDLEtBQUtDLE1BQU1DLFdBQ3RCLElBQUlPLEVBQVVwQyxFQUFPK0IsV0FBVyxTQUFVTCxHQUN2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R0FBeUIsUUFBZHFDLEVBQUk0QixPQUFrQixDQUNwRCxJQUFJQyxFQUFTN0IsRUFBSThCLEtBQUtDLE1BQU0sS0FFSyxRQUE3QkYsRUFBT0EsRUFBT0csT0FBUyxJQUN6QmhDLEVBQUlKLE1BQVFqQyxFQUNaRixFQUFnQixLQUNoQmtFLEtBRUExQixFQUFJUSxLQUFLLENBQ1BhLE1BQU9oRSxFQUFZMkUsZ0JBSXZCaEMsRUFBSVEsS0FBSyxDQUNQYSxNQUFPaEUsRUFBWTJFLGdCQUdkdEUsRUFDVEcsRUFBV0gsR0FBU2UsS0FBS0UsSUFDVCxNQUFWQSxFQUNGcUIsRUFBSVEsS0FBSyxDQUNQYSxNQUFPaEUsRUFBWTJFLFlBR3JCakMsRUFBSXZCLEtBQU9HLEVBQ1hvQixFQUFJSixNQUFRakMsRUFDWmdFLE9BRURQLE1BQU1DLElBQ3NCLGVBQXpCYSxRQUFRQyxJQUFJQyxTQUNkbkMsRUFBSVEsS0FBSyxDQUNQYSxNQUFPLFVBR1RyQixFQUFJUSxLQUFLLENBQ1BhLE1BQU9ELEVBQUlFLFlBS1ksZUFBekJXLFFBQVFDLElBQUlDLFNBQ2RuQyxFQUFJUSxLQUFLLENBQ1BhLE1BQU9oRSxFQUFZK0UsU0FHckJqRixFQUFHaUIsS0FBS0MsUUFBUSxDQUNkQyxNQUFPLEtBQ05HLEtBQUtELElBQ0ZBLEdBQ0Z1QixFQUFJdkIsS0FBT0EsRUFBSzZELEdBQ2hCdEMsRUFBSXJDLFFBQVUsS0FDZGdFLE1BR0EzQixFQUFJdkIsS0FBTyxHQUNYdUIsRUFBSXJDLFFBQVUsS0FDZGdFLFNBT1ZZLE9BQU9DLFFBQVV4QiIsImZpbGUiOiJtb2R1bGUvYXV0aGVudGlmaWNhdGlvbi9hdXRoZW50aWZpY2F0aW9uLm1pZGRlbHdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cbmNvbnN0IGRiID0gcmVxdWlyZShcIi4uL2RhdGFiYXNlL2luZGV4Lm1vZGVsXCIpO1xuY29uc3QgbG9Qd0dlc3Rpb24gPSByZXF1aXJlKCcuLi9mdW5jdGlvbi9wd0dlc3Rpb24uZm4nKTtcbmNvbnN0IGdvRXJyb3JMaXN0ID0gcmVxdWlyZSgnLi4vZXJyb3IubGlzdCcpO1xuXG5jb25zdCBwblRva2VuVmFsaWRpdHkgPSAzNjAwMDAwOyAvLyBkdXLDqWUgZW4gbXNcblxubGV0IGdvQ29ubmVjdGVkVG9rZW5zID0ge307XG5cbmxldCBnc1RlbXBzVG9rZW5zID0gbnVsbDtcblxuZnVuY3Rpb24gZkRlbGV0ZVRva2VuKHBzVG9rZW4pIHtcbiAgY29uc29sZS5sb2coYGRlbGV0ZSB0b2tlbiA9PiAke3BzVG9rZW59YCk7XG4gIGRlbGV0ZSBnb0Nvbm5lY3RlZFRva2Vuc1twc1Rva2VuXTtcbn1cblxuZnVuY3Rpb24gZlRlc3RUb2tlbihwc1Rva2VuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocFJlc29sdmUsIHBSZWplY3QpID0+IHtcbiAgICBpZiAoISFnb0Nvbm5lY3RlZFRva2Vuc1twc1Rva2VuXSkge1xuICAgICAgY2xlYXJUaW1lb3V0KGdvQ29ubmVjdGVkVG9rZW5zW3BzVG9rZW5dLnRpbWVvdXQpO1xuXG4gICAgICBnb0Nvbm5lY3RlZFRva2Vuc1twc1Rva2VuXS50aW1lb3V0ID0gc2V0VGltZW91dChmRGVsZXRlVG9rZW4sIHBuVG9rZW5WYWxpZGl0eSwgcHNUb2tlbik7XG5cbiAgICAgIGRiLlVzZXIuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWRVc2VyOiBnb0Nvbm5lY3RlZFRva2Vuc1twc1Rva2VuXS51c2VyXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4ocFJlc29sdmUpXG5cbiAgICB9IGVsc2UgcmV0dXJuIHBSZXNvbHZlKCk7XG4gIH0pXG5cbiAgcmV0dXJuIGxQcm9taXNlO1xufVxuXG5mdW5jdGlvbiBmQ3JlYXRlQ29ubmVjdGVkVG9rZW4ocG9Vc2VyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocFJlc29sdmUsIHBSZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGxzU2VjcmV0ID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgbGV0IGxzSGFzaCA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGE1MTInLCBsc1NlY3JldClcbiAgICAgICAgLnVwZGF0ZShEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBKU09OLnN0cmluZ2lmeShwb1VzZXIpICsgRGF0ZS5ub3coKSlcbiAgICAgICAgLmRpZ2VzdCgnaGV4Jyk7XG5cbiAgICAgIGxzU2VjcmV0ID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgbHNIYXNoID0gY3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTUxMicsIGxzU2VjcmV0KVxuICAgICAgICAudXBkYXRlKERhdGUubm93KCkudG9TdHJpbmcoKSArIGxzSGFzaCArIHBvVXNlci5pZFVzZXIgKyBEYXRlLm5vdygpKVxuICAgICAgICAuZGlnZXN0KCdoZXgnKTtcbiAgICAgIGxzU2VjcmV0ID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgbGV0IGxzSGFzaDIgPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhNTEyJywgbHNTZWNyZXQpXG4gICAgICAgIC51cGRhdGUoRGF0ZS5ub3coKS50b1N0cmluZygpICsgTWF0aC5yYW5kb20oKSArIERhdGUubm93KCkpXG4gICAgICAgIC5kaWdlc3QoJ2hleCcpO1xuXG4gICAgICBsZXQgcHNUb2tlbiA9IGxzSGFzaCArIERhdGUubm93KCkgKyBsc0hhc2gyO1xuXG4gICAgICBsZXQgbHNIYXNoMyA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGE1MTInLCBsc1NlY3JldClcbiAgICAgICAgLnVwZGF0ZShwc1Rva2VuKVxuICAgICAgICAuZGlnZXN0KCdoZXgnKTtcblxuICAgICAgcHNUb2tlbiA9IGxzSGFzaCArIERhdGUubm93KCkgKyBsc0hhc2gyICsgRGF0ZS5ub3coKSArIGxzSGFzaDM7XG5cbiAgICAgIGxldCBsb0Nvbm5lY3RlZFRva2VuID0ge307XG4gICAgICBsb0Nvbm5lY3RlZFRva2VuLnRva2VuID0gcHNUb2tlbjtcbiAgICAgIGxvQ29ubmVjdGVkVG9rZW4udXNlciA9IHBvVXNlci5pZFVzZXI7XG4gICAgICBsb0Nvbm5lY3RlZFRva2VuLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZEZWxldGVUb2tlbiwgcG5Ub2tlblZhbGlkaXR5LCBwc1Rva2VuKTtcblxuICAgICAgZ29Db25uZWN0ZWRUb2tlbnNbcHNUb2tlbl0gPSBsb0Nvbm5lY3RlZFRva2VuO1xuXG4gICAgICBwUmVzb2x2ZShwc1Rva2VuKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBwUmVqZWN0KGUpXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZkNyZWF0ZVRlbXBUb2tlbigpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChwUmVzb2x2ZSwgcFJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgbHNTZWNyZXQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbHNIYXNoID0gY3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTUxMicsIGxzU2VjcmV0KVxuICAgICAgICAudXBkYXRlKERhdGUubm93KCkudG9TdHJpbmcoKSArIE1hdGgucmFuZG9tKCkgKyBEYXRlLm5vdygpKVxuICAgICAgICAuZGlnZXN0KCdoZXgnKTtcblxuICAgICAgZ3NUZW1wc1Rva2VucyA9ICd0ZW1wXycgKyBsc0hhc2ggKyBEYXRlLm5vdygpXG5cbiAgICAgIHBSZXNvbHZlKGdzVGVtcHNUb2tlbnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHBSZWplY3QoZSlcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmQ29ubmVjdChyZXEsIHJlcykge1xuICByZXR1cm4gZGIuVXNlci5jb3VudCh7fSlcbiAgICAudGhlbihwbkNvdW50ID0+IHtcbiAgICAgIGlmIChwbkNvdW50KVxuICAgICAgICByZXR1cm4gZGIuVXNlci5maW5kT25lKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlckxvZ2luOiByZXEuYm9keS51c2VyTG9naW5cbiAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocG9Vc2VyID0+IHtcbiAgICAgICAgICBpZiAocG9Vc2VyKSB7XG4gICAgICAgICAgICBsZXQgbHNIYXNoID0gbG9Qd0dlc3Rpb24uZkhhc2hQVyhyZXEuYm9keS51c2VyUGFzc3dvcmQsIHBvVXNlcik7XG4gICAgICAgICAgICBpZiAocG9Vc2VyLnVzZXJIYXNoID09IGxzSGFzaCkge1xuICAgICAgICAgICAgICByZXR1cm4gZkNyZWF0ZUNvbm5lY3RlZFRva2VuKHBvVXNlcikudGhlbihwc1Rva2VuID0+IHtcbiAgICAgICAgICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICAgICAgICB0b2tlbjogcHNUb2tlblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHRocm93IEVycm9yKGdvRXJyb3JMaXN0LmJhZFBXKTtcbiAgICAgICAgICB9IGVsc2UgdGhyb3cgRXJyb3IoZ29FcnJvckxpc3QuYmFkTG9naW4pO1xuICAgICAgICB9KVxuICAgICAgZWxzZSBpZiAocmVxLmJvZHkudXNlclBhc3N3b3JkID09IFwicm9vdFwiICYmIHJlcS5ib2R5LnVzZXJMb2dpbiA9PSBcInJvb3RcIikge1xuICAgICAgICByZXR1cm4gZkNyZWF0ZVRlbXBUb2tlbigpLnRoZW4ocHNUb2tlbiA9PiB7XG4gICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgdG9rZW46IHBzVG9rZW5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB0aHJvdyBFcnJvcihnb0Vycm9yTGlzdC5iYWRMb2dpbik7XG5cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBmRGlzY29ubmVjdChyZXEsIHJlcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHBSZXNvbHZlLCBwUmVqZWN0KSA9PiB7XG5cbiAgICBsZXQgcHNUb2tlbiA9IHJlcS5oZWFkZXJzWyd0b2tlbiddO1xuXG4gICAgaWYgKGdvQ29ubmVjdGVkVG9rZW5zW3BzVG9rZW5dIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ29Db25uZWN0ZWRUb2tlbnNbcHNUb2tlbl0udGltZW91dCk7XG4gICAgICBmRGVsZXRlVG9rZW4ocHNUb2tlbilcbiAgICB9XG5cbiAgICBwUmVzb2x2ZSgpO1xuICB9KTtcbn1cblxubGV0IGdvUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxubGV0IGdvQXV0aGVudGlmaWNhdGlvblJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmdvQXV0aGVudGlmaWNhdGlvblJvdXRlci5wb3N0KCcvbG9naW4nLCAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5ib2R5LnVzZXJMb2dpbiAhPSBudWxsICYmIHJlcS5ib2R5LnVzZXJQYXNzd29yZCAhPSBudWxsKSB7XG4gICAgZkNvbm5lY3QocmVxLCByZXMpLmNhdGNoKGVyciA9PiB7XG4gICAgICByZXMuanNvbih7XG4gICAgICAgIGVycm9yOiBlcnIubWVzc2FnZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZWxzZVxuICAgIHJlcy5qc29uKHtcbiAgICAgIGVycm9yOiBnb0Vycm9yTGlzdC5iYWREYXRhXG4gICAgfSk7XG59KVxuXG5cbmdvQXV0aGVudGlmaWNhdGlvblJvdXRlci51c2UoJy9kaXNjb25uZWN0JywgKHJlcSwgcmVzKSA9PiB7XG4gIGZEaXNjb25uZWN0KHJlcSwgcmVzKS50aGVuKCgpID0+IHtcbiAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgcmVzdWx0OiBcImRpc2Nvbm5lY3RlZFwiXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgLy8gYSBham91dGVyIGZpbHRyZSBlcnJldXJcbiAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlXG4gICAgICB9KTtcbiAgICB9KTtcbn0pXG5cbmdvUm91dGVyLnVzZShcIi9hdXRoZW50aWZpY2F0aW9uXCIsIGdvQXV0aGVudGlmaWNhdGlvblJvdXRlcik7XG5cbmdvUm91dGVyLnVzZShcIi9cIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGxldCBwc1Rva2VuID0gcmVxLmhlYWRlcnNbJ3Rva2VuJ107XG5cbiAgaWYgKCEhZ3NUZW1wc1Rva2Vucykge1xuICAgIGlmIChnc1RlbXBzVG9rZW5zID09IHBzVG9rZW4gJiYgcmVxLm1ldGhvZCA9PSAnUE9TVCcpIHtcbiAgICAgIGxldCBsdFBhdGggPSByZXEucGF0aC5zcGxpdChcIi9cIilcblxuICAgICAgaWYgKGx0UGF0aFtsdFBhdGgubGVuZ3RoIC0gMV0gPT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgcmVxLnRva2VuID0gcHNUb2tlbjtcbiAgICAgICAgZ3NUZW1wc1Rva2VucyA9IG51bGw7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICBlcnJvcjogZ29FcnJvckxpc3QuYmFkVG9rZW5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgZXJyb3I6IGdvRXJyb3JMaXN0LmJhZFRva2VuXG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHNUb2tlbikge1xuICAgIGZUZXN0VG9rZW4ocHNUb2tlbikudGhlbihwb1VzZXIgPT4ge1xuICAgICAgaWYgKHBvVXNlciA9PSBudWxsKSB7XG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICBlcnJvcjogZ29FcnJvckxpc3QuYmFkVG9rZW5cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXEudXNlciA9IHBvVXNlcjtcbiAgICAgICAgcmVxLnRva2VuID0gcHNUb2tlbjtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgZXJyb3I6ICdlcnJvcidcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXMuanNvbih7XG4gICAgICAgIGVycm9yOiBnb0Vycm9yTGlzdC5ub0F1dGhcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYi5Vc2VyLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZToge31cbiAgICAgIH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgcmVxLnVzZXIgPSB1c2VyLmlkO1xuICAgICAgICAgIHJlcS5wc1Rva2VuID0gbnVsbDtcbiAgICAgICAgICBuZXh0KCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXEudXNlciA9ICcnO1xuICAgICAgICAgIHJlcS5wc1Rva2VuID0gbnVsbDtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnb1JvdXRlcjtcbiJdfQ==

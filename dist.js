var data=[{party:"dem",isHoldover:!0},{party:"dem",isHoldover:!1},{party:"ind",isHoldover:!1},{party:"none",isHoldover:!1},{party:"gop",isHoldover:!1},{party:"gop",isHoldover:!0},{party:"dem",isHoldover:!0},{party:"dem",isHoldover:!1},{party:"ind",isHoldover:!1},{party:"none",isHoldover:!1},{party:"gop",isHoldover:!0},{party:"gop",isHoldover:!0},{party:"dem",isHoldover:!1},{party:"ind",isHoldover:!1},{party:"none",isHoldover:!1},{party:"gop",isHoldover:!1},{party:"gop",isHoldover:!0},{party:"gop",isHoldover:!0}],RADIUS=10,ROWS=3,COLUMNS=Math.ceil(data.length/ROWS),outerWidth=400,outerHeight=outerWidth/2,margin={top:RADIUS,right:RADIUS,bottom:RADIUS,left:RADIUS},width=outerWidth-margin.left-margin.right,height=outerHeight-margin.top-margin.bottom,x=d3.scalePoint().range([0,width]).domain(d3.range(COLUMNS)),y=d3.scalePoint().range([height,0]).domain(d3.range(ROWS)),svg=d3.select("svg").attr("viewBox","0 0 "+outerWidth+" "+outerHeight).attr("preserveAspectRatio","xMidYMin slice").append("g").attr("transform","translate("+margin.left+", "+margin.top+")"),circle=svg.selectAll("circle").data(data).enter().append("circle").attr("r",function(t){return t.isHoldover?RADIUS/2:RADIUS}).attr("cx",function(t,r){return x(r%COLUMNS)}).attr("cy",function(t,r){return y(Math.floor(r/COLUMNS))}).attr("class",function(t){return t.party});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjb25zdCIsImRhdGEiLCJwYXJ0eSIsImlzSG9sZG92ZXIiLCJSQURJVVMiLCJST1dTIiwiQ09MVU1OUyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwiZDMiLCJzY2FsZVBvaW50IiwicmFuZ2UiLCJkb21haW4iLCJ5Iiwic3ZnIiwic2VsZWN0IiwiYXR0ciIsImFwcGVuZCIsImNpcmNsZSIsInNlbGVjdEFsbCIsImVudGVyIiwiZCIsImkiLCJmbG9vciJdLCJtYXBwaW5ncyI6IkFBQUFBLEdBQU1DLFFBQ0hDLE1BQU8sTUFBT0MsWUFBWSxJQUN6QkQsTUFBTyxNQUFPQyxZQUFZLElBQzFCRCxNQUFPLE1BQU9DLFlBQVksSUFDMUJELE1BQU8sT0FBUUMsWUFBWSxJQUMzQkQsTUFBTyxNQUFPQyxZQUFZLElBQzFCRCxNQUFPLE1BQU9DLFlBQVksSUFDMUJELE1BQU8sTUFBT0MsWUFBWSxJQUMxQkQsTUFBTyxNQUFPQyxZQUFZLElBQzFCRCxNQUFPLE1BQU9DLFlBQVksSUFDMUJELE1BQU8sT0FBUUMsWUFBWSxJQUMzQkQsTUFBTyxNQUFPQyxZQUFZLElBQzFCRCxNQUFPLE1BQU9DLFlBQVksSUFDMUJELE1BQU8sTUFBT0MsWUFBWSxJQUMxQkQsTUFBTyxNQUFPQyxZQUFZLElBQzFCRCxNQUFPLE9BQVFDLFlBQVksSUFDM0JELE1BQU8sTUFBT0MsWUFBWSxJQUMxQkQsTUFBTyxNQUFPQyxZQUFZLElBQzFCRCxNQUFPLE1BQU9DLFlBQVksSUFHeEJDLE9BQVcsR0FDWEMsS0FBUSxFQUNSQyxRQUFVQyxLQUFLQyxLQUFLUCxLQUFLUSxPQUFPSixNQUVoQ0ssV0FBYSxJQUNiQyxZQUFjRCxXQUFjLEVBRTVCRSxRQUFXQyxJQUFLVCxPQUFRVSxNQUFPVixPQUFRVyxPQUFRWCxPQUFRWSxLQUFNWixRQUM3RGEsTUFBUVAsV0FBYUUsT0FBT0ksS0FBT0osT0FBT0UsTUFDMUNJLE9BQVNQLFlBQWNDLE9BQU9DLElBQU1ELE9BQU9HLE9BRTFDSSxFQUFLQyxHQUFDQyxhQUNYQyxPQUFPLEVBQUdMLFFBQ1ZNLE9BQU9ILEdBQUdFLE1BQU1oQixVQUVYa0IsRUFBS0osR0FBQ0MsYUFDWEMsT0FBT0osT0FBUSxJQUNmSyxPQUFPSCxHQUFHRSxNQUFNakIsT0FFWm9CLElBQVFMLEdBQUNNLE9BQU8sT0FDbkJDLEtBQUssVUFBVyxPQUFLakIsV0FBRSxJQUFVQyxhQUNqQ2dCLEtBQUssc0JBQXVCLGtCQUM3QkMsT0FBTyxLQUNORCxLQUFLLFlBQWEsYUFBV2YsT0FBUyxLQUFBLEtBQUlBLE9BQUcsSUFBQSxLQUUxQ2lCLE9BQVNKLElBQUlLLFVBQVUsVUFDMUI3QixLQUFLQSxNQUNOOEIsUUFBUUgsT0FBTyxVQUNkRCxLQUFLLElBQUssU0FBQUssR0FBQSxNQUFBQSxHQUFBN0IsV0FBRUMsT0FBSyxFQUFBQSxTQUNqQnVCLEtBQUssS0FBTSxTQUFBSyxFQUFBQyxHQUFBLE1BQUNkLEdBQUNjLEVBQUszQixXQUNsQnFCLEtBQUssS0FBTSxTQUFBSyxFQUFBQyxHQUFBLE1BQUNULEdBQUNqQixLQUFLMkIsTUFBQUQsRUFBSzNCLFlBQ3ZCcUIsS0FBSyxRQUFTLFNBQUFLLEdBQUEsTUFBQUEsR0FBQTlCIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSBbXG5cdHsgcGFydHk6ICdkZW0nLCBpc0hvbGRvdmVyOiB0cnVlIH0sXG4gIHsgcGFydHk6ICdkZW0nLCBpc0hvbGRvdmVyOiBmYWxzZSB9LFxuICB7IHBhcnR5OiAnaW5kJywgaXNIb2xkb3ZlcjogZmFsc2UgfSxcbiAgeyBwYXJ0eTogJ25vbmUnLCBpc0hvbGRvdmVyOiBmYWxzZSB9LFxuICB7IHBhcnR5OiAnZ29wJywgaXNIb2xkb3ZlcjogZmFsc2UgfSxcbiAgeyBwYXJ0eTogJ2dvcCcsIGlzSG9sZG92ZXI6IHRydWUgfSxcbiAgeyBwYXJ0eTogJ2RlbScsIGlzSG9sZG92ZXI6IHRydWUgfSxcbiAgeyBwYXJ0eTogJ2RlbScsIGlzSG9sZG92ZXI6IGZhbHNlIH0sXG4gIHsgcGFydHk6ICdpbmQnLCBpc0hvbGRvdmVyOiBmYWxzZSB9LFxuICB7IHBhcnR5OiAnbm9uZScsIGlzSG9sZG92ZXI6IGZhbHNlIH0sXG4gIHsgcGFydHk6ICdnb3AnLCBpc0hvbGRvdmVyOiB0cnVlIH0sXG4gIHsgcGFydHk6ICdnb3AnLCBpc0hvbGRvdmVyOiB0cnVlIH0sXG4gIHsgcGFydHk6ICdkZW0nLCBpc0hvbGRvdmVyOiBmYWxzZSB9LFxuICB7IHBhcnR5OiAnaW5kJywgaXNIb2xkb3ZlcjogZmFsc2UgfSxcbiAgeyBwYXJ0eTogJ25vbmUnLCBpc0hvbGRvdmVyOiBmYWxzZSB9LFxuICB7IHBhcnR5OiAnZ29wJywgaXNIb2xkb3ZlcjogZmFsc2UgfSxcbiAgeyBwYXJ0eTogJ2dvcCcsIGlzSG9sZG92ZXI6IHRydWUgfSxcbiAgeyBwYXJ0eTogJ2dvcCcsIGlzSG9sZG92ZXI6IHRydWUgfSxcbl1cblxuY29uc3QgUkFESVVTID0gMTBcbmNvbnN0IFJPV1MgPSAzXG5jb25zdCBDT0xVTU5TID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoL1JPV1MpXG5cbmNvbnN0IG91dGVyV2lkdGggPSA0MDBcbmNvbnN0IG91dGVySGVpZ2h0ID0gb3V0ZXJXaWR0aCAvIDJcblxuY29uc3QgbWFyZ2luID0geyB0b3A6IFJBRElVUywgcmlnaHQ6IFJBRElVUywgYm90dG9tOiBSQURJVVMsIGxlZnQ6IFJBRElVUyB9XG5jb25zdCB3aWR0aCA9IG91dGVyV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodFxuY29uc3QgaGVpZ2h0ID0gb3V0ZXJIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbVxuXG5jb25zdCB4ID0gZDMuc2NhbGVQb2ludCgpXG5cdC5yYW5nZShbMCwgd2lkdGhdKVxuXHQuZG9tYWluKGQzLnJhbmdlKENPTFVNTlMpKVxuXG5jb25zdCB5ID0gZDMuc2NhbGVQb2ludCgpXG5cdC5yYW5nZShbaGVpZ2h0LCAwXSlcblx0LmRvbWFpbihkMy5yYW5nZShST1dTKSlcblxuY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCdzdmcnKVxuXHRcdC5hdHRyKCd2aWV3Qm94JywgYDAgMCAke291dGVyV2lkdGh9ICR7b3V0ZXJIZWlnaHR9YClcblx0XHQuYXR0cigncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pbiBzbGljZScpXG5cdC5hcHBlbmQoJ2cnKVxuXHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApXG5cbmNvbnN0IGNpcmNsZSA9IHN2Zy5zZWxlY3RBbGwoJ2NpcmNsZScpXG5cdFx0LmRhdGEoZGF0YSlcblx0LmVudGVyKCkuYXBwZW5kKCdjaXJjbGUnKVxuXHRcdC5hdHRyKCdyJywgZCA9PiBkLmlzSG9sZG92ZXIgPyBSQURJVVMgLyAyIDogUkFESVVTKVxuXHRcdC5hdHRyKCdjeCcsIChkLCBpKSA9PiB4KGkgJSBDT0xVTU5TKSlcblx0XHQuYXR0cignY3knLCAoZCwgaSkgPT4geShNYXRoLmZsb29yKGkgLyBDT0xVTU5TKSkpXG5cdFx0LmF0dHIoJ2NsYXNzJywgZCA9PiBkLnBhcnR5KVxuIl19

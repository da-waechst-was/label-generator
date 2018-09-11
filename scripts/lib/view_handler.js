(function(){var e,t=function(e,t){return function(){return e.apply(t,arguments)}};e=function(){function e(e){this.container=e,this.render=t(this.render,this),this.setupForm=t(this.setupForm,this),this.setupColorChooser=t(this.setupColorChooser,this),this.setupKGAChooser=t(this.setupKGAChooser,this),this.background=$(".label-background",this.container),this.name=$(".name",this.container),this.from=$(".from",this.container),this.date=$(".date",this.container),this.freeLine=$(".free-line",this.container),this.setupForm(),this.setupColorChooser(),this.setupKGAChooser(),this.render()}return e.colors=["bordeaux","himbeere","apricot"],e.kgas=["","Bornholm Eins e.V.","Bornholm Zwei e.V"],e.prototype.setupKGAChooser=function(){var t,r,n,o,s;for(o=e.kgas,s=[],t=0,n=o.length;t<n;t++)r=o[t],s.push($("#select-kga").append("<option value='"+r+"'>"+r+"</option>"));return s},e.prototype.setupColorChooser=function(){var t,r,n,o;for(o=e.colors,r=0,n=o.length;r<n;r++)t=o[r],$(".color-chooser").append("<li class='"+t+"' data-color='"+t+"'></li> ");return $(".color-chooser li").click(function(r){return function(n){return t=$(n.currentTarget).data("color"),r.background.prop("src","images/labels/"+t+".jpg"),r.container.removeClass(e.colors.join(" ")).addClass(t)}}(this))},e.prototype.setupForm=function(){var e,t,r,n,o;for(e=(new Date).getFullYear(),n=[e,e-1,e-2,e-3],t=0,r=n.length;t<r;t++)o=n[t],$("#select-year").append($("<option>",{value:o,text:o}));return $("#input-name").keyup(this.render),$("#input-parcel").keyup(this.render),$("#input-parcel").change(this.render),$("#input-free-text").keyup(this.render),$("#select-kga").change(this.render),$("#select-month").change(this.render),$("#select-year").change(this.render),$("#button-print").click(function(e){return function(){return e.container.print("styles/main.css")}}(this))},e.prototype.render=function(){var e,t,r;return this.name.text($("#input-name").val()),e="Vom "+$("#select-month").val()+" "+$("#select-year").val(),this.date.text(e),r="Parzelle "+$("#input-parcel").val(),t=$("#select-kga").val(),this.from.text(r+" | "+t),this.freeLine.text($("#input-free-text").val())},e}()}).call(this);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi92aWV3X2hhbmRsZXIuY29mZmVlIiwibGliL3ZpZXdfaGFuZGxlci5qcyJdLCJuYW1lcyI6WyJWaWV3SGFuZGxlciIsImJpbmQiLCJmbiIsIm1lIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjb250YWluZXIiLCJ0aGlzIiwicmVuZGVyIiwic2V0dXBGb3JtIiwic2V0dXBDb2xvckNob29zZXIiLCJzZXR1cEtHQUNob29zZXIiLCJiYWNrZ3JvdW5kIiwiJCIsIm5hbWUiLCJmcm9tIiwiZGF0ZSIsImZyZWVMaW5lIiwiY29sb3JzIiwia2dhcyIsInByb3RvdHlwZSIsImkiLCJrZ2EiLCJsZW4iLCJyZWYiLCJyZXN1bHRzIiwibGVuZ3RoIiwicHVzaCIsImFwcGVuZCIsImNvbG9yIiwiY2xpY2siLCJfdGhpcyIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsInByb3AiLCJyZW1vdmVDbGFzcyIsImpvaW4iLCJhZGRDbGFzcyIsImN1cnJlbnRZZWFyIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInZhbHVlIiwidGV4dCIsImtleXVwIiwiY2hhbmdlIiwicHJpbnQiLCJwYXJjZWwiLCJ2YWwiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQ0FDQSxXQUFBLEdBQUFBLEdBQUFDLEVBQUEsU0FBQUMsRUFBQUMsR0FBQSxNQUFBLFlBQUEsTUFBQUQsR0FBQUUsTUFBQUQsRUFBQUUsWUFBTUwsR0FBQSxXQWFTLFFBQUFBLEdBQUNNLEdBQUFDLEtBQUNELFVBQURBLEVDSFZDLEtBQUtDLE9BQVNQLEVBQUtNLEtBQUtDLE9BQVFELE1BQ2hDQSxLQUFLRSxVQUFZUixFQUFLTSxLQUFLRSxVQUFXRixNQUN0Q0EsS0FBS0csa0JBQW9CVCxFQUFLTSxLQUFLRyxrQkFBbUJILE1BQ3REQSxLQUFLSSxnQkFBa0JWLEVBQUtNLEtBQUtJLGdCQUFpQkosTURDcERBLEtBQUNLLFdBQWFDLEVBQUUsb0JBQXFCTixLQUFDRCxXQUN0Q0MsS0FBQ08sS0FBYUQsRUFBRSxRQUFTTixL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IiwiZmlsZSI6ImxpYi92aWV3X2hhbmRsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFZpZXdIYW5kbGVyXG4gIEBjb2xvcnMgPSBbXG4gICAgJ2JvcmRlYXV4J1xuICAgICdoaW1iZWVyZSdcbiAgICAnYXByaWNvdCdcbiAgXVxuXG4gIEBrZ2FzID0gW1xuICAgICcnXG4gICAgJ0Jvcm5ob2xtIEVpbnMgZS5WLidcbiAgICAnQm9ybmhvbG0gWndlaSBlLlYnXG4gIF1cblxuICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIpIC0+XG4gICAgQGJhY2tncm91bmQgPSAkKCcubGFiZWwtYmFja2dyb3VuZCcsIEBjb250YWluZXIpXG4gICAgQG5hbWUgICAgICAgPSAkKCcubmFtZScsIEBjb250YWluZXIpXG4gICAgQGZyb20gICAgICAgPSAkKCcuZnJvbScsIEBjb250YWluZXIpXG4gICAgQGRhdGUgICAgICAgPSAkKCcuZGF0ZScsIEBjb250YWluZXIpXG4gICAgQGZyZWVMaW5lICAgPSAkKCcuZnJlZS1saW5lJywgQGNvbnRhaW5lcilcblxuICAgIEBzZXR1cEZvcm0oKVxuICAgIEBzZXR1cENvbG9yQ2hvb3NlcigpXG4gICAgQHNldHVwS0dBQ2hvb3NlcigpXG4gICAgQHJlbmRlcigpXG5cbiAgc2V0dXBLR0FDaG9vc2VyOiA9PlxuICAgIGZvciBrZ2EgaW4gVmlld0hhbmRsZXIua2dhc1xuICAgICAgJCgnI3NlbGVjdC1rZ2EnKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPScje2tnYX0nPiN7a2dhfTwvb3B0aW9uPlwiKVxuXG4gIHNldHVwQ29sb3JDaG9vc2VyOiA9PlxuICAgIGZvciBjb2xvciBpbiBWaWV3SGFuZGxlci5jb2xvcnNcbiAgICAgICQoJy5jb2xvci1jaG9vc2VyJykuYXBwZW5kKFwiPGxpIGNsYXNzPScje2NvbG9yfScgZGF0YS1jb2xvcj0nI3tjb2xvcn0nPjwvbGk+IFwiKVxuXG4gICAgJCgnLmNvbG9yLWNob29zZXIgbGknKS5jbGljayggKGUpID0+XG4gICAgICBjb2xvciA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb2xvcicpXG4gICAgICBAYmFja2dyb3VuZC5wcm9wKCdzcmMnLCBcImltYWdlcy9sYWJlbHMvI3tjb2xvcn0uanBnXCIpXG4gICAgICBAY29udGFpbmVyLnJlbW92ZUNsYXNzKFZpZXdIYW5kbGVyLmNvbG9ycy5qb2luKCcgJykpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGNvbG9yKVxuICAgIClcblxuICBzZXR1cEZvcm06ID0+XG4gICAgY3VycmVudFllYXIgPSAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKVxuICAgIGZvciB5ZWFyIGluIFtjdXJyZW50WWVhciwgY3VycmVudFllYXIgLSAxLCBjdXJyZW50WWVhciAtIDIsIGN1cnJlbnRZZWFyIC0gM11cbiAgICAgICQoJyNzZWxlY3QteWVhcicpLmFwcGVuZCgkKCc8b3B0aW9uPicsIHt2YWx1ZTogeWVhciwgdGV4dDogeWVhcn0pKVxuXG4gICAgJCgnI2lucHV0LW5hbWUnKS5rZXl1cCBAcmVuZGVyXG4gICAgJCgnI2lucHV0LXBhcmNlbCcpLmtleXVwIEByZW5kZXJcbiAgICAkKCcjaW5wdXQtcGFyY2VsJykuY2hhbmdlIEByZW5kZXJcbiAgICAkKCcjaW5wdXQtZnJlZS10ZXh0Jykua2V5dXAgQHJlbmRlclxuICAgICQoJyNzZWxlY3Qta2dhJykuY2hhbmdlIEByZW5kZXJcbiAgICAkKCcjc2VsZWN0LW1vbnRoJykuY2hhbmdlIEByZW5kZXJcbiAgICAkKCcjc2VsZWN0LXllYXInKS5jaGFuZ2UgQHJlbmRlclxuXG4gICAgJCgnI2J1dHRvbi1wcmludCcpLmNsaWNrKCA9PlxuICAgICAgQGNvbnRhaW5lci5wcmludChcInN0eWxlcy9tYWluLmNzc1wiKVxuICAgIClcblxuICByZW5kZXI6ID0+XG4gICAgQG5hbWUudGV4dCgkKCcjaW5wdXQtbmFtZScpLnZhbCgpKVxuXG4gICAgZGF0ZSAgID0gJ1ZvbSAnICsgJCgnI3NlbGVjdC1tb250aCcpLnZhbCgpICsgJyAnICsgJCgnI3NlbGVjdC15ZWFyJykudmFsKClcbiAgICBAZGF0ZS50ZXh0KGRhdGUpXG5cbiAgICBwYXJjZWwgPSAnUGFyemVsbGUgJyArICQoJyNpbnB1dC1wYXJjZWwnKS52YWwoKVxuICAgIGtnYSAgICA9ICQoJyNzZWxlY3Qta2dhJykudmFsKClcbiAgICBAZnJvbS50ZXh0KFwiI3twYXJjZWx9IHwgI3trZ2F9XCIpXG5cbiAgICBAZnJlZUxpbmUudGV4dCgkKCcjaW5wdXQtZnJlZS10ZXh0JykudmFsKCkpXG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBWaWV3SGFuZGxlcixcbiAgICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuICBWaWV3SGFuZGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBWaWV3SGFuZGxlci5jb2xvcnMgPSBbJ2JvcmRlYXV4JywgJ2hpbWJlZXJlJywgJ2Fwcmljb3QnXTtcblxuICAgIFZpZXdIYW5kbGVyLmtnYXMgPSBbJycsICdCb3JuaG9sbSBFaW5zIGUuVi4nLCAnQm9ybmhvbG0gWndlaSBlLlYnXTtcblxuICAgIGZ1bmN0aW9uIFZpZXdIYW5kbGVyKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICB0aGlzLnJlbmRlciA9IGJpbmQodGhpcy5yZW5kZXIsIHRoaXMpO1xuICAgICAgdGhpcy5zZXR1cEZvcm0gPSBiaW5kKHRoaXMuc2V0dXBGb3JtLCB0aGlzKTtcbiAgICAgIHRoaXMuc2V0dXBDb2xvckNob29zZXIgPSBiaW5kKHRoaXMuc2V0dXBDb2xvckNob29zZXIsIHRoaXMpO1xuICAgICAgdGhpcy5zZXR1cEtHQUNob29zZXIgPSBiaW5kKHRoaXMuc2V0dXBLR0FDaG9vc2VyLCB0aGlzKTtcbiAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICQoJy5sYWJlbC1iYWNrZ3JvdW5kJywgdGhpcy5jb250YWluZXIpO1xuICAgICAgdGhpcy5uYW1lID0gJCgnLm5hbWUnLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgICB0aGlzLmZyb20gPSAkKCcuZnJvbScsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgIHRoaXMuZGF0ZSA9ICQoJy5kYXRlJywgdGhpcy5jb250YWluZXIpO1xuICAgICAgdGhpcy5mcmVlTGluZSA9ICQoJy5mcmVlLWxpbmUnLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgICB0aGlzLnNldHVwRm9ybSgpO1xuICAgICAgdGhpcy5zZXR1cENvbG9yQ2hvb3NlcigpO1xuICAgICAgdGhpcy5zZXR1cEtHQUNob29zZXIoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgVmlld0hhbmRsZXIucHJvdG90eXBlLnNldHVwS0dBQ2hvb3NlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGksIGtnYSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgICByZWYgPSBWaWV3SGFuZGxlci5rZ2FzO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGtnYSA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCQoJyNzZWxlY3Qta2dhJykuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBrZ2EgKyBcIic+XCIgKyBrZ2EgKyBcIjwvb3B0aW9uPlwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuXG4gICAgVmlld0hhbmRsZXIucHJvdG90eXBlLnNldHVwQ29sb3JDaG9vc2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29sb3IsIGksIGxlbiwgcmVmO1xuICAgICAgcmVmID0gVmlld0hhbmRsZXIuY29sb3JzO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbG9yID0gcmVmW2ldO1xuICAgICAgICAkKCcuY29sb3ItY2hvb3NlcicpLmFwcGVuZChcIjxsaSBjbGFzcz0nXCIgKyBjb2xvciArIFwiJyBkYXRhLWNvbG9yPSdcIiArIGNvbG9yICsgXCInPjwvbGk+IFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkKCcuY29sb3ItY2hvb3NlciBsaScpLmNsaWNrKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGNvbG9yID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbG9yJyk7XG4gICAgICAgICAgX3RoaXMuYmFja2dyb3VuZC5wcm9wKCdzcmMnLCBcImltYWdlcy9sYWJlbHMvXCIgKyBjb2xvciArIFwiLmpwZ1wiKTtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuY29udGFpbmVyLnJlbW92ZUNsYXNzKFZpZXdIYW5kbGVyLmNvbG9ycy5qb2luKCcgJykpLmFkZENsYXNzKGNvbG9yKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9O1xuXG4gICAgVmlld0hhbmRsZXIucHJvdG90eXBlLnNldHVwRm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnRZZWFyLCBpLCBsZW4sIHJlZiwgeWVhcjtcbiAgICAgIGN1cnJlbnRZZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XG4gICAgICByZWYgPSBbY3VycmVudFllYXIsIGN1cnJlbnRZZWFyIC0gMSwgY3VycmVudFllYXIgLSAyLCBjdXJyZW50WWVhciAtIDNdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHllYXIgPSByZWZbaV07XG4gICAgICAgICQoJyNzZWxlY3QteWVhcicpLmFwcGVuZCgkKCc8b3B0aW9uPicsIHtcbiAgICAgICAgICB2YWx1ZTogeWVhcixcbiAgICAgICAgICB0ZXh0OiB5ZWFyXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgICQoJyNpbnB1dC1uYW1lJykua2V5dXAodGhpcy5yZW5kZXIpO1xuICAgICAgJCgnI2lucHV0LXBhcmNlbCcpLmtleXVwKHRoaXMucmVuZGVyKTtcbiAgICAgICQoJyNpbnB1dC1wYXJjZWwnKS5jaGFuZ2UodGhpcy5yZW5kZXIpO1xuICAgICAgJCgnI2lucHV0LWZyZWUtdGV4dCcpLmtleXVwKHRoaXMucmVuZGVyKTtcbiAgICAgICQoJyNzZWxlY3Qta2dhJykuY2hhbmdlKHRoaXMucmVuZGVyKTtcbiAgICAgICQoJyNzZWxlY3QtbW9udGgnKS5jaGFuZ2UodGhpcy5yZW5kZXIpO1xuICAgICAgJCgnI3NlbGVjdC15ZWFyJykuY2hhbmdlKHRoaXMucmVuZGVyKTtcbiAgICAgIHJldHVybiAkKCcjYnV0dG9uLXByaW50JykuY2xpY2soKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuY29udGFpbmVyLnByaW50KFwic3R5bGVzL21haW4uY3NzXCIpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH07XG5cbiAgICBWaWV3SGFuZGxlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGF0ZSwga2dhLCBwYXJjZWw7XG4gICAgICB0aGlzLm5hbWUudGV4dCgkKCcjaW5wdXQtbmFtZScpLnZhbCgpKTtcbiAgICAgIGRhdGUgPSAnVm9tICcgKyAkKCcjc2VsZWN0LW1vbnRoJykudmFsKCkgKyAnICcgKyAkKCcjc2VsZWN0LXllYXInKS52YWwoKTtcbiAgICAgIHRoaXMuZGF0ZS50ZXh0KGRhdGUpO1xuICAgICAgcGFyY2VsID0gJ1BhcnplbGxlICcgKyAkKCcjaW5wdXQtcGFyY2VsJykudmFsKCk7XG4gICAgICBrZ2EgPSAkKCcjc2VsZWN0LWtnYScpLnZhbCgpO1xuICAgICAgdGhpcy5mcm9tLnRleHQocGFyY2VsICsgXCIgfCBcIiArIGtnYSk7XG4gICAgICByZXR1cm4gdGhpcy5mcmVlTGluZS50ZXh0KCQoJyNpbnB1dC1mcmVlLXRleHQnKS52YWwoKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBWaWV3SGFuZGxlcjtcblxuICB9KSgpO1xuXG59KS5jYWxsKHRoaXMpO1xuIl19

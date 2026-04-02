export class clsTooltips {
  public colors = [];
  public Text = '';
  public value = 0.0;
  public body = [];

  customTooltips = (tooltip: any) => {
    // Tooltip Element
    let tooltipEl = document.getElementById('chartjs-tooltip');

    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'chartjs-tooltip';
      tooltipEl.innerHTML = '<table></table>';
      // this._chart.canvas.parentNode.appendChild(tooltipEl);
      document.body.appendChild(tooltipEl);
    }

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = '0';
      return;
    }

    // Set caret Position
    tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (tooltip.yAlign) {
      tooltipEl.classList.add(tooltip.yAlign);
    } else {
      tooltipEl.classList.add('no-transform');
    }

    function getBody(bodyItem: any) {
      return bodyItem.lines;
    }

    // Set Text
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map(getBody);
      let arrBodyLines = new Array();
      bodyLines.forEach(function (body: any, i: number) {
        const objTooltips = new clsTooltips();
        objTooltips.colors = tooltip.labelColors[i];
        objTooltips.body = body;
        const arr = body[0].split(':');
        if (arr.length == 2) {
          objTooltips.Text = arr[0];
          objTooltips.value = Number(arr[1]);
        }
        arrBodyLines.push(objTooltips);
      });
      arrBodyLines = arrBodyLines.sort(function (x, y) {
        return y.value - x.value;
      });
      let innerHtml = '<thead>';

      titleLines.forEach(function (title: string) {
        innerHtml += '<tr><th>' + title + '</th></tr>';
      });
      innerHtml += '</thead><tbody>';
      console.log('bodyLines', bodyLines);

      arrBodyLines.forEach(function (objInFor, i) {
        console.log('objInFor', objInFor);
        //const colors = tooltip.labelColors[i];
        let style = 'background:' + objInFor.colors.backgroundColor;
        style += '; border-color:' + objInFor.colors.borderColor;
        style += '; border-width: 2px';
        const span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
        innerHtml += '<tr><td>' + span + objInFor.body + '</td></tr>';
      });

      innerHtml += '</tbody>';

      const tableRoot = tooltipEl.querySelector('table');
      if (tableRoot) {
        tableRoot.innerHTML = innerHtml;
      }
    }

    const positionY = 0; // this._chart.canvas.offsetTop;
    const positionX = 0; //this._chart.canvas.offsetLeft;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = '1';
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
    tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
    tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
    tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
  };
}

//教学班用户排序统计
export class clsTooltips6 {
  public colors = [];
  public Text = '';
  public value = 0.0;
  public body = [];
}

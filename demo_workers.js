/**
 * Created by qinlifang on 2016/6/1.
 */
var i=0;

function timedCount()
{
    i=i+1;
    // postMessage() ���� - �������� HTML ҳ�洫��һ����Ϣ��
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();
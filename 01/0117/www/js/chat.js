var chat;
$(function() {
	function Chat() {
		var self = this;
		this.$text = $('#chat-text');
		console.log('Chat client constructor called');
	}

	Chat.prototype.connect = function(){
		var self = this;
		this.io = io();

		this.io.on('connect', function() {
			self.$text.html('');
			self.writeLine('<span class="text-success">Connected to server</span>');
		});
	};

	Chat.prototype.writeLine = function(html) {
		this.$text.append('</pre><div>' + html + '</div><pre>');
		this.$text.animate({scrollTop: chat.$text.prop('scrollHeight')}, "slow");
	};

	chat = new Chat();

	chat.connect();
	$('#btnSend').on('click', function(){
		chat.writeLine($('#input').val());
	});

});

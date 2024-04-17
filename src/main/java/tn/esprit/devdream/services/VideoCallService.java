package tn.esprit.devdream.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class VideoCallService {

    private final SimpMessagingTemplate messagingTemplate;
    private final Map<String, String> activeCalls = new HashMap<>(); // Store active calls

    @Autowired
    public VideoCallService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void initiateCall(String callerId, String recipientId) {
        activeCalls.put(callerId, recipientId);
        activeCalls.put(recipientId, callerId);
        messagingTemplate.convertAndSendToUser(recipientId, "/topic/call", "Incoming call from " + callerId);
    }

    public void joinCall(String userId) {
        if (activeCalls.containsKey(userId)) {
            String callId = activeCalls.get(userId);
            messagingTemplate.convertAndSendToUser(userId, "/topic/call", "Joining call with " + callId);
        }
    }

    public void endCall(String userId) {
        if (activeCalls.containsKey(userId)) {
            String callId = activeCalls.get(userId);
            activeCalls.remove(userId);
            activeCalls.remove(callId);
            messagingTemplate.convertAndSendToUser(callId, "/topic/call", userId + " ended the call");
        }
    }
}

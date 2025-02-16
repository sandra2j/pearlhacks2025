import os
import streamlit as st
import google.generativeai as genai
import shelve
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Configure the Gemini model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash",
    generation_config=generation_config,
    system_instruction=(
        "The FAFSA can be confusing, but I'm here to help "
        "make the process easier. I can answer your questions, guide you through specific "
        "sections, and point you to helpful resources. How can I help you today?"
    ),
)

st.title("FinAI")

# Start a new chat session
chat_session = model.start_chat(history=[
    {"role": "model", "parts": ["Hi, I'm Fin, your FAFSA assistant. How can I help you today?"]}
])

USER_AVATAR = "👤"
BOT_AVATAR = "🤖"

# Load chat history from shelve file
def load_chat_history():
    with shelve.open("chat_history") as db:
        return db.get("messages", [])

# Save chat history to shelve file
def save_chat_history(messages):
    with shelve.open("chat_history") as db:
        db["messages"] = messages

# Initialize or load chat history
if "messages" not in st.session_state:
    st.session_state.messages = load_chat_history()
    if not st.session_state.messages:  # If no history exists, add Fin's first message
        st.session_state.messages.append({
            "role": "assistant",
            "content": "Hi, I'm Fin, your FAFSA assistant. How can I help you today?"
        })

# Main chat input and response handling
input = st.chat_input("How can I help?")
if prompt := input:
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user", avatar=USER_AVATAR):
        st.markdown(prompt)
    
    with st.chat_message("assistant", avatar=BOT_AVATAR):
        message_placeholder = st.empty()
        response = chat_session.send_message(prompt)
        full_response = response.text
        message_placeholder.markdown(full_response)
    
    st.session_state.messages.append({"role": "assistant", "content": full_response})
    
    # Save chat history
    save_chat_history(st.session_state.messages)

# Place the Delete Chat History button BELOW the input box
if st.button("🗑️ Delete Chat History"):
    st.session_state.messages = []
    save_chat_history([])
    st.rerun()  # Refresh the page to clear the messages

# Display chat history
for message in st.session_state.messages:
    avatar = USER_AVATAR if message["role"] == "user" else BOT_AVATAR
    with st.chat_message(message["role"], avatar=avatar):
        st.markdown(message["content"])

# Main chat input and response handling
if prompt := input:
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user", avatar=USER_AVATAR):
        st.markdown(prompt)
    
    with st.chat_message("assistant", avatar=BOT_AVATAR):
        message_placeholder = st.empty()
        response = chat_session.send_message(prompt)
        full_response = response.text
        message_placeholder.markdown(full_response)
    
    st.session_state.messages.append({"role": "assistant", "content": full_response})
    
    # Save chat history
    save_chat_history(st.session_state.messages)
